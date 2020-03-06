import $ from 'jquery';

  $(document).ready(function(){
	setTimeout(function(){
		let bottom = $('.front-page-nav').offset().top;
		let percentage = bottom / 100;
		percentage = percentage * 80;
		bottom = bottom - percentage;

		const heroHeight = $('#hero').outerHeight();

		$(window).on('scroll', function(){
			let top = $(this).scrollTop();

			if(top >= bottom) {
				$('.front-page-nav').addClass('displayed').removeClass('hidden');
				$('#hero .social_links').addClass('hidden').removeClass('displayed')
			} else {
				$('.front-page-nav').addClass('hidden').removeClass('displayed');
				$('#hero .social_links').addClass('displayed').removeClass('hidden')
			}
		});

		$(window).on('scroll', function(){
			let trigger = $('.front-page-nav-cont').offset().top;
			let top = $(this).scrollTop();
			let bodyMargin = $('.front-page-nav').outerHeight();
			console.log(top);
			console.log(trigger);

			if(top >= trigger) {
				$('.front-page-nav').addClass('fixed');
				$('#primary').css('margin-top', bodyMargin);
			} else {
				$('.front-page-nav').removeClass('fixed');
				$('#primary').css('margin-top', '0');
			}
		});

		$('body').on('click', function(e) {
			
			if($(e.target).hasClass('scrollAnchor') ) {
				$('html,body').animate({ scrollTop: heroHeight }, 'slow');
			}
		});

	}, 500);
  });
