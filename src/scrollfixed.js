$(function () {
  const header = $('#header');
  const intro = $('#intro');
  const navLinks = $('#nav a[href^="#"]');
  const navToggle = $('#nav_toggle');
  const collapseLinks = $('[data-collapse]');

  const introHeight = intro.innerHeight();
  let scrollOffset = $(window).scrollTop();

  // Fixed Header
  checkScroll();

  $(window).on('scroll', checkScroll);

  function checkScroll() {
    if (scrollOffset >= introHeight) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
  }

  // Smooth Scroll
  navLinks.on('click', function (event) {
    event.preventDefault();

    const blockId = $(this).attr('href');
    const blockOffset = $(blockId).offset().top;

    navLinks.removeClass('active');
    $(this).addClass('active');

    $('html, body').animate(
      {
        scrollTop: blockOffset,
      },
      500
    );
  });

  // Menu Nav Toggle
  navToggle.on('click', function (event) {
    event.preventDefault();

    $(this).toggleClass('active');
    $('#nav').toggleClass('active');
  });

  // Collapse
  collapseLinks.on('click', function (event) {
    event.preventDefault();

    $(this).toggleClass('active');
  });
});
