
//======================================================
//DOCUMENT READY
//======================================================
(function() {
	"use strict";
	
	$(document).ready(function() {	
		//Menu ========================
		$(window).on('scroll', function () {
			if ($(window).scrollTop() > 70)
			{
				$("#mainmenu").addClass('fixedHeader');
			}
			else
			{
				$("#mainmenu").removeClass('fixedHeader');
			}
			/************ Menu Active on Scroll **********************/
			Scroll();
		});
		$(".menuButton").on('click', function () {
			$(this).next('ul').slideToggle('slow');
			$(this).toggleClass('active');
		});
		$('.mainMenu ul li.scroll a').on('click', function () {
			if ($(window).width() < 991)
			{
				if ($(this).parent().hasClass('hsChildItem'))
				{
					$(this).parent('.mainMenu ul li.hsChildItem').toggleClass('active');
				}
				else
				{
					$('html, body').animate({scrollTop: $(this.hash).offset().top - 70}, 1000);
					$(".mainMenu ul").slideUp('slow');
					$(".menuButton").removeClass('active');
				}
			}
			else
			{
				$('html, body').animate({scrollTop: $(this.hash).offset().top - 70}, 1000);
			}
			return false;
		});
		// User define function
		function Scroll() {
			var contentTop = [];
			var contentBottom = [];
			var winTop = $(window).scrollTop();
			var rangeTop = 200;
			var rangeBottom = 500;
			$('.mainMenu').find('.scroll > a').each(function () {
				var atr = $(this).attr('href');
				if ($(atr).length > 0)
				{
					contentTop.push($($(this).attr('href')).offset().top);
					contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
				}
			});
			$.each(contentTop, function (i) {

				if (winTop > contentTop[i] - rangeTop) {

					$('.mainMenu li.scroll')
							.removeClass('active')
							.eq(i).addClass('active');
				}
			});
		};
		//WOW INIT ========================
		if ($(window).width() > 766)
		{
			 var wow = new WOW({
				 mobile: false 
			 });
			 wow.init();
		}
		//MixItUp =================================	
			$('.project-list').mixItUp();			
		//owlCarousel==============================
			  $("#owl-demo").owlCarousel({
				  slideSpeed : 300,
				  paginationSpeed : 400,
				  singleItem:true
			 
				  // "singleItem:true" is a shortcut for:
				  // items : 1, 
				  // itemsDesktop : false,
				  // itemsDesktopSmall : false,
				  // itemsTablet: false,
				  // itemsMobile : false		 
			  });
	
		//progress-bar================================	
		var div_top = $('.pro-width').offset().top;
			$(window).scroll(function(){
				if($(window).scrollTop() > div_top){
					$('.pro-width').each(function() {
					$(this).find('.pro-dev').animate({
					  width: $(this).attr('data-percent'),
					}, 2000, function() {

					});
				  });	
				}
			});
		// Animated Number========================
		$('#allnumber').appear(function () {
			$('#number1').animateNumber({number: 8535}, 2000);
			$('#number2').animateNumber({number: 1095}, 2000);
			$('#number3').animateNumber({number: 6012}, 2000);
			$('#number4').animateNumber({number: 4320}, 2000);
		}, {accX: 0, accY: -200});
		//scrollTeam===================================
		$('.service-btn').on("click", function(e) {
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $('#team').offset().top - 70
			}, 1500);
		});
		//scrollTop===================================
		$("body, html").on("click", ".scroll-top-icon", function (e) {
			e.preventDefault();
			$('html, body').animate({scrollTop: 0}, 800);
		});
		// show language dropdowns=====================
		$('#lang-switcher').find('.ui-dropdown-list-trigger').each(function() {
			$(this).click(function(){
				$(this).parent().toggleClass('active');
			});
		});
		//search box======================================
		function buttonUp(){
			 var valux = $('.sb-search-input').val(); 
				valux = $.trim(valux).length;
				if(valux !== 0){
					$('.sb-search-submit').css('z-index','99');
				} else{
					$('.sb-search-input').val(''); 
					$('.sb-search-submit').css('z-index','-999');
				}
		}   
		$(document).ready(function(){
			var submitIcon = $('.sb-icon-search');
			var submitInput = $('.sb-search-input');
			var searchBox = $('.sb-search');
			var isOpen = false;
			
			$(document).mouseup(function(){
				if(isOpen == true){
				submitInput.val('');
				$('.sb-search-submit').css('z-index','-999');
				submitIcon.click();
				}
			});      
			submitIcon.mouseup(function(){
				return false;
			});       
			searchBox.mouseup(function(){
				return false;
			});               
			submitIcon.click(function(){
				if(isOpen == false){
					searchBox.addClass('sb-search-open');
					isOpen = true;
				} else {
					searchBox.removeClass('sb-search-open');
					isOpen = false;
				}
			});
		});
	});
})(jQuery);
//END DOCUMENT READY------------