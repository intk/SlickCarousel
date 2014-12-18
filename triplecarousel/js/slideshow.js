/* ------------------------------------------------------------------------------
    S L I D E S H O W - E N H A N C E M E N T S
--------------------------------------------------------------------------------- */
$(document).ready(function() {
	$(".slideshow").slick({
		accessibility: true,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: '60px',
		dots: false,
		infinite: true,
		speed: 500,
		lazyLoad: 'progressive',
		adaptiveHeight: false
	});
});
