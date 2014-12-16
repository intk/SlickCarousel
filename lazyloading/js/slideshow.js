/* ------------------------------------------------------------------------------
    S L I D E S H O W - E N H A N C E M E N T S
--------------------------------------------------------------------------------- */

var last_h = 0;

function recalculateHeight() {
	h = $(window).height();
	w = $(window).width();

	$slick = $('.slideshow').getSlick();
	currentSlide = $('.slideshow').slickCurrentSlide();

	$slide = $($slick.$slides[currentSlide]);
	$slides = $($slick.$slides);

	$slides.each(function(index) {
		$img = $($(this).find('img')[0]);
		img_h = $img.height();
		img_w = $img.width();

		if (img_h != 0) {
			/* Image height is larger than window: resize */	
			if (img_h > h) {
				$img.attr("style", "height:"+h+"px; max-width: 100%; width:auto;");
				last_h = h;
			} 
			/* Image height is smaller than window */
			else {
				if (img_w < w) {
					if (last_h != h) {
						$img.attr("style", "height:"+h+"px; max-width: 100%; width:auto;");
					}
				} else {
					$img.attr("style", "width:100%;");
				}
			}
			$('.slideshow').attr("style", "height:"+h+"px;");
		} else {
			$img.load(function() {
				var img_h = $(this).height();				
				if (img_h > h) {
					$(this).attr("style", "height:"+h+"px; max-width: 100%; width: auto;");
					$('.slideshow').attr("style", "height:"+h+"px;");
					last_h = h;
				}
			});
		}
	})
}

$(document).ready(function() {
	$(".slideshow").slick({
		accessibility: true,
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		lazyLoad: 'progressive',
		adaptiveHeight: false
	});

	h = $(window).height();
	last_h = h;

	$('.slideshow').attr("style", "height:"+h+"px;");
	recalculateHeight();

	$(window).resize(function() {
		recalculateHeight();
	});
});
