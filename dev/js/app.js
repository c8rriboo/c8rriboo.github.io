$(document).ready(function() {

	console.log('ready');

	resetGRadientScroll();

	function resetGRadientScroll() {
		$('.gradient-scroll').removeClass('gradient-scroll').addClass('gradient-scroll');
	}

	var container = document.getElementById('c8rriboo');

	if (container.addEventListener) {
		// IE9, Chrome, Safari, Opera
		container.addEventListener("mousewheel", doScroll, false);
		// Firefox
		container.addEventListener("DOMMouseScroll", doScroll, false);
	}
	// IE 6/7/8
	else container.attachEvent("onmousewheel", doScroll);


	function doScroll(e) {
		// cross-browser wheel delta
		var e = window.event || e; // old IE support
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

		var scroll_value = container.scrollLeft + (200 * (-delta));

		if (scroll_value < 0) {
			scroll_value = 0;
		}

		TweenMax.to('#c8rriboo', .15, {scrollTo: {x: scroll_value}, onComplete: isPastTheEnd, onCompleteParams: [scroll_value]});

		return false;
	}

	function isPastTheEnd(scroll_value) {
		var first_section = $('section').first(),
			width = first_section.outerWidth();

		if (scroll_value > width) {
			scroll_value = scroll_value - width;

			TweenLite.to('#c8rriboo', -1, {scrollTo:{x: scroll_value}});
		}
	}

	window.setInterval(function(){
		updateRandomSlide();
	}, 2000);

	var prev_slide_container = 10;

	function updateRandomSlide() {
		var slide_containers = $('section').first().find('.slides-container').length;

		var next_slide_container = Math.floor(Math.random() * slide_containers);

		if (next_slide_container != prev_slide_container) {
			nextSlide(next_slide_container);
		} else {
			updateRandomSlide();
		}
	}

	function nextSlide(index) {
		prev_slide_container = index;

		$('section').each(function() {
			var slide_container = $($(this).find('.slides-container')[index]);

			var active_slide = slide_container.find('.slide.active');
			var next_slide = active_slide.next();

			if (next_slide.length < 1) {
				next_slide = slide_container.find('.slide').eq(0);
			}

			active_slide.removeClass('active')
			next_slide.addClass('active');
		});
	}

});