/* ------------------------------------------------------------------------------
    S L I D E S H O W - E N H A N C E M E N T S
--------------------------------------------------------------------------------- */
$(document).ready(function() {
	$(".slideshow").slick({
		accessibility: true,
		slidesToShow: 3,
		dots: false,
		infinite: true,
		speed: 500,
		lazyLoad: 'progressive',
		adaptiveHeight: false
	});
});
