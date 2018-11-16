$(document).ready(function() {

	realAge();

	launchIntro();

	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	function launchIntro() {
		var blocks = $('.block');
		var lines = blocks.length / 4;

		var tl = new TimelineMax();

		for (var i = 1; i <= 4; i++) {
			for (var j = 0; j < 3; j++) {
				var index = i + j * 4;

				var label = 'label'+i;

				tl.to('.block:nth-child('+index+')', .5, {alpha: 1, ease: Power2.easeIn}, i * .1);
			}
		}

		tl.play();
	}

	function realAge() {
		var now = new Date();

		var birth = new Date('1993-09-07T22:00:00');

		var diff = now - birth;

		var age = Math.floor((diff) / (1000*60*60*24*365));

		$('.age').html(age);
	}

	function isPastTheEnd(scroll_value) {
		var first_section = $('section').first(),
			width = first_section.outerWidth();

		if (scroll_value > width) {
			scroll_value = scroll_value - width;

			TweenMax.to('#c8rriboo', -1, {scrollTo:{x: scroll_value}});
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