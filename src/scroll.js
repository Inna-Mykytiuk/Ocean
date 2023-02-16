document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#header');
  const intro = document.querySelector('#intro');
  const navLinks = document.querySelectorAll('#nav a[href^="#"]');
  const navToggle = document.querySelector('#nav_toggle');
  const collapseLinks = document.querySelectorAll('[data-collapse]');

  let introHeight = intro.offsetHeight;
  let scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

  // Fixed Header
  checkScroll();

  window.addEventListener('scroll', checkScroll);

  function checkScroll() {
    scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollOffset >= introHeight) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 100; // Subtract a value to set the link to active just below the specified section boundary
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      // Set link to active just below the specified section boundary
      navLinks.forEach(link => {
        link.classList.remove('active');
        const section = document.querySelector(link.hash);
        if (
          section.offsetTop <= offsetTop &&
          section.offsetTop + section.offsetHeight > offsetTop
        ) {
          link.classList.add('active');
        }
      });
    }
  });
});

// Fixed header
const header = document.querySelector('.header');
const headerHeight = header.offsetHeight;
const headerTop = header.getBoundingClientRect().top + window.pageYOffset;

function fixHeader() {
  if (window.pageYOffset > headerTop) {
    document.body.style.paddingTop = headerHeight + 'px';
    header.classList.add('fixed');
  } else {
    document.body.style.paddingTop = 0;
    header.classList.remove('fixed');
  }
}

window.addEventListener('scroll', fixHeader);

// Update active navigation link
function setActiveLink() {
  const offset = 100; // adjust this value to set the offset from the section boundary
  const currentPos = window.scrollY + headerHeight + offset;
  document.querySelectorAll('section').forEach(section => {
    const id = section.getAttribute('id');
    const link = document.querySelector(`#nav a[href="#${id}"]`);
    if (
      section.offsetTop - headerHeight - offset <= currentPos &&
      section.offsetTop + section.offsetHeight - headerHeight > currentPos
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// const navLinks = document.querySelectorAll('#nav a[href^="#"]');

// window.addEventListener('scroll', () => {
//   const scrollDistance = window.scrollY;
//   navLinks.forEach(link => {
//     const section = document.querySelector(link.hash);
//     if (
//       section.offsetTop <= scrollDistance + headerHeight + 10 &&
//       section.offsetTop + section.offsetHeight >
//         scrollDistance + headerHeight + 10
//     ) {
//       link.classList.add('active');
//     } else {
//       link.classList.remove('active');
//     }
//   });
// });
