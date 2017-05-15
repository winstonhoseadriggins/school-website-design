// Wow JS
new WOW().init();

// For reducing nav height
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('nav').addClass('shrink segment');
  } else {
    $('nav').removeClass('shrink');
  }
});

// Dropdown Initialize
$('.ui.dropdown').dropdown({
    on : 'hover'
});


$('.header-carousel').owlCarousel({
	autoplay:true,
	autoplayTimeout:3000,
	animateOut: 'slideOutDown',
	animateIn: 'flipInX',
	loop:true,
	items: 1,
	margin: 30,
	stagePadding: 30,
	smartSpeed: 450,
	lazyLoad : true,
	margin:100
});
