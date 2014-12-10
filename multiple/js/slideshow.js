/* ------------------------------------------------------------------------------
    S L I D E S H O W - E N H A N C E M E N T S
--------------------------------------------------------------------------------- */
function onAfterChange(event) {
	currentSlide = event.currentSlide;
	var $currSlider = $(event.$slides[currentSlide]);
	$currSlider.slickPlay();
} 

function onBeforeChange(event) {
	currentSlide = event.currentSlide;
	var $currSlider = $(event.$slides[currentSlide]);
	$currSlider.slickPause();
}

$(document).ready(function() {
	$(".inner-slideshow").each(function(slideshow) {
		$(this).slick({
			accessibility: true,
			pauseOnHover: true,
			draggable: false,
			dots: false,
			infinite: true,
			speed: 0,
			autoplaySpeed: 500,
			slidesToShow: 1,
			arrows: false,
			lazyLoad: 'progressive',
			adaptiveHeight: true
		});
	});

	$(".slideshow").slick({
		accessibility: true,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		onAfterChange: onAfterChange,
		onBeforeChange: onBeforeChange,
		lazyLoad: 'progressive',
		adaptiveHeight: true
	});

	$(".inner-slideshow").show();
});
