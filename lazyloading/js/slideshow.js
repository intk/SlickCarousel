/* ------------------------------------------------------------------------------
    S L I D E S H O W - E N H A N C E M E N T S
--------------------------------------------------------------------------------- */
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
				$('.slideshow').attr("style", "height:"+h+"px;");
			} else {
				if (img_w < w) {
					$img.attr("style", "height:"+h+"px; max-width: 100%; width:auto;");
				}
				$('.slideshow').attr("style", "height:"+h+"px;");
			}
			if (w < img_w) {
				$img.attr("style", "height:auto;");
			}
		} else {
			$img.load(function() {
				var img_h = $(this).height();
				if (img_h > h) {
					$(this).attr("style", "height:"+h+"px; max-width: 100%; width: auto;");
					$('.slideshow').attr("style", "height:"+h+"px;");
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
	$('.slideshow').attr("style", "height:"+h+"px;");
	recalculateHeight();

	$(window).resize(function() {
		recalculateHeight();
	});
});
