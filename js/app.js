// Navigation background on scroll > 768px
$(document).scroll(function() {
  if($(document).width() >= 768) {
    if ($(document).scrollTop() >= $('.main-header').height()) {
      $('.main-nav').addClass('scroll');
    } else {
      //Remove classes when scrolling back to header
      $('.main-nav').removeClass('scroll');
      $('.main-nav li.active').removeClass('active');
    }
  }
});

// Smooth scrolling on anchors with ID's
$('a').on('click', function(event) {
  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== '') {
    event.preventDefault();

    // Store hash
    const hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  }
});

//Toggle active class on click in main navigation
$('.main-nav').on('click', 'li', function(event) {
  $('li.active').removeClass('active');
  $(this).addClass('active');
});
