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
