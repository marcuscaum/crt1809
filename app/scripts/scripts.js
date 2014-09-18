functions = {
	svgIcons: function(){
	  	jQuery('img.svg').each(function(){
            var $img = jQuery(this);
            var imgID = $img.attr('id');
            var imgClass = $img.attr('class');
            var imgURL = $img.attr('src');

            jQuery.get(imgURL, function(data) {
                // Get the SVG tag, ignore the rest
                var $svg = jQuery(data).find('svg');

                // Add replaced image's ID to the new SVG
                if(typeof imgID !== 'undefined') {
                    $svg = $svg.attr('id', imgID);
                }
                // Add replaced image's classes to the new SVG
                if(typeof imgClass !== 'undefined') {
                    $svg = $svg.attr('class', imgClass+' replaced-svg');
                }

                // Remove any invalid XML tags as per http://validator.w3.org
                $svg = $svg.removeAttr('xmlns:a');

                // Replace image with new SVG
                $img.replaceWith($svg);

            }, 'xml');

        });
	},


	iosSlider:function(){
		$('.iosSlider').iosSlider({
			desktopClickDrag: true,
			snapToChildren: true,
			infiniteSlider: true,
			snapSlideCenter: true,
			navSlideSelector: '.sliderContainer .slideSelectors .item',
			navPrevSelector: '.sliderContainer .slideSelectors .prev',
			navNextSelector: '.sliderContainer .slideSelectors .next',
			onSlideComplete: slideComplete,
			onSliderLoaded: sliderLoaded,
			onSlideChange: slideChange,
			autoSlide: true,
			scrollbar: true,
			scrollbarContainer: '.sliderContainer .scrollbarContainer',
			scrollbarMargin: '0',
			scrollbarBorderRadius: '0',
			keyboardControls: true
		});


		function slideChange(args) {
					
			$('.sliderContainer .slideSelectors .item').removeClass('selected');
			$('.sliderContainer .slideSelectors .item:eq(' + (args.currentSlideNumber - 1) + ')').addClass('selected');

		}

		function slideComplete(args) {
			
			if(!args.slideChanged) return false;
				
			$(args.sliderObject).find('.text1, .text2').attr('style', '');
			
			$(args.currentSlideObject).find('.text1').animate({
				left: '370px',
				opacity: '0.8'
			}, 900, 'easeOutQuint');
			
			$(args.currentSlideObject).find('.text2').delay(100).animate({
				left: '370px',
				opacity: '0.8'
			}, 800, 'easeOutQuint');
			
		}

		function sliderLoaded(args) {
				
			$(args.sliderObject).find('.text1, .text2').attr('style', '');
			
			$(args.currentSlideObject).find('.text1').animate({
				left: '370px',
				opacity: '0.8'
			}, 900, 'easeOutQuint');
			
			$(args.currentSlideObject).find('.text2').delay(100).animate({
				left: '370px',
				opacity: '0.8'
			}, 800, 'easeOutQuint');
			
			slideChange(args);
			
		}
	},

	marquee: function(){
		$('#fast_info').marquee({
		    duration: 10000,
		    gap: 50,
		    delayBeforeStart: 0,
		    direction: 'left',
		    duplicated: true,
		    pauseOnHover: true
		});
	},

	scrollEvents: function(){

		$(window).on('scroll',function(){
			var y = $(this).scrollTop();

			$('#scroll_div').css({top: (Math.max(y) / 4) * - 1})
			if(y >= 500){
				$('header#desktop').addClass('animationMenu');
			}else{
				$('header#desktop').removeClass('animationMenu');
			}
		})

		if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
		window.onmousewheel = document.onmousewheel = wheel;

		function wheel(event) {
		    var delta = 0;
		    if (event.wheelDelta) delta = event.wheelDelta / 190;
		    else if (event.detail) delta = -event.detail / 3;

		    handle(delta);
		    if (event.preventDefault) event.preventDefault();
		    event.returnValue = false;
		}

		function handle(delta) {
		    var time = 1000;
			var distance = 300;
		    
		    $('html, body').stop().animate({
		        scrollTop: $(window).scrollTop() - (distance * delta)
		    }, time );
		}


	},

	checkWidth: function(){
		var w = $(window).width();
		if (w >= 1024) {
			this.scrollEvents();	
		};
	}


}

require = {
	functions: function(){
 		functions.svgIcons();
		functions.marquee();
		functions.iosSlider();
		functions.checkWidth();
	}
}




