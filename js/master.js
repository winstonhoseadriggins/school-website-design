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


// $('.header-carousel').owlCarousel({
// 	autoplay:true,
// 	autoplayTimeout:3000,
// 	animateOut: 'slideOutDown',
// 	animateIn: 'zoomIn',
// 	loop:true,
// 	items: 1,
// 	margin: 30,
// 	stagePadding: 30,
// 	smartSpeed: 450,
// 	lazyLoad : true,
// 	margin:100
// });
var owl = $('.header-carousel');

  // Carousel initialization
  owl.owlCarousel({
    autoplay:true,
    autoplayTimeout:5000,
    // animateOut: 'slideOutDown',
    // animateIn: 'zoomIn',
    loop:true,
    items: 1,
    margin: 30,
    // stagePadding: 30,
    // smartSpeed: 450,
    lazyLoad : true,
    margin:100,
    // navSpeed:500,
    //   nav:true
  });


  // add animate.css class(es) to the elements to be animated
  function setAnimation ( _elem, _InOut ) {
    // Store all animationend event name in a string.
    // cf animate.css documentation
    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    _elem.each ( function () {
      var $elem = $(this);
      var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

      $elem.addClass($animationType).one(animationEndEvent, function () {
        $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
      });
    });
  }

// Fired before current slide change
  owl.on('change.owl.carousel', function(event) {
      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-out]");
      setAnimation ($elemsToanim, 'out');
  });

// Fired after current slide has been changed
  owl.on('changed.owl.carousel', function(event) {

      var $currentItem = $('.owl-item', owl).eq(event.item.index);
      var $elemsToanim = $currentItem.find("[data-animation-in]");
      setAnimation ($elemsToanim, 'in');
  })
