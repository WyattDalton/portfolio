import $ from 'jquery';

//   // Front page content fading in and out
// 	$('.front-page-nav .nav-items > a').on('click', function(e){
//     e.preventDefault();
//     let $id = $(this).attr('href');
//     let height = $($id).height();


//     $('.front-dynamic-container').css({
//       height : height,
//       opacity : 1,
//     });

//     $(this).addClass('active').attr('aria-expanded', true);
//     $(this).siblings('a').removeClass('active').attr('aria-expanded', false);
//     $($id).addClass('displayed').removeClass('hidden').attr('aria-expanded', true);
//     $($id).siblings('section').addClass('hidden').removeClass('displayed').attr('aria-expanded', false);
//   });


  $(document).ready(function(){

		if($('body').hasClass('home')) {
			let bottom = $('.front-page-nav').offset().top;
			let percentage = bottom / 100;
			percentage = percentage * 80;
			bottom = bottom - percentage;

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


			$(document).ready(function(){
				$('.front-page-nav .nav-items > .active').trigger('click');
				$(window).trigger('scroll');
			});
			$(window).resize(function(){
				$('.front-page-nav .nav-items > .active').trigger('click');
			});
		}
  });
