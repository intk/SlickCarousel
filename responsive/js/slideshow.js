/* ------------------------------------------------------------------------------
    S L I D E S H O W - E N H A N C E M E N T S
--------------------------------------------------------------------------------- */

/* jquery.imagefit 
 *
 * Version 0.2 by Oliver Boermans <http://www.ollicle.com/eg/jquery/imagefit/>
 *
 * Extends jQuery <http://jquery.com>
 *
 */


function change_width(img) {
	img.attr("style", "width:100%; height: auto;");
	var h = img.height();
	return h;
}

function change_height(img) {
	img.attr("style", "height:100%; width: auto;");
	var w = img.width();
	return w;
}

function resizeImages() {
	h = $('.slideshow').height();
	w = $('.slideshow').width();

	$slick = $('.slideshow').getSlick();
	currentSlide = $('.slideshow').slickCurrentSlide();

	$slides = $($slick.$slides);

	$slides.each(function(index) {	
		$img = $($(this).find('img')[0]);
		$img.hide();
		$img.load(function() {
			var image_h = change_width($(this));
			if (image_h > h) {
				change_height($(this));
			}
			$img.show();
		});
	});
}

function resizeImage() {
	h = $('.slideshow').height();
	w = $('.slideshow').width();

	$slick = $('.slideshow').getSlick();
	currentSlide = $('.slideshow').slickCurrentSlide();

	$slides = $($slick.$slides);

	$slides.each(function(index) {
		$img = $($(this).find('img')[0]);
		var image_h = change_width($img);
		if (image_h > h) {
			change_height($img);
		}
	});
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

	resizeImages();

	$(window).resize(function() {
		resizeImage();
	});
});