// // Smooth scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior: 'smooth',
//     });
//   });
// });

// // Fixed header
// const header = document.querySelector('.header');
// const offset = header.offsetTop;

// function fixHeader() {
//   if (window.pageYOffset >= offset) {
//     header.classList.add('fixed');
//   } else {
//     header.classList.remove('fixed');
//   }
// }

// window.addEventListener('scroll', fixHeader);

// // Update active navigation link
// function setActiveLink() {
//   const currentPos = window.scrollY;
//   document.querySelectorAll('section').forEach(section => {
//     if (
//       section.offsetTop <= currentPos + 200 &&
//       section.offsetTop + section.offsetHeight > currentPos + 200
//     ) {
//       const id = section.getAttribute('id');
//       document.querySelectorAll('.nav-link').forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${id}`) {
//           link.classList.add('active');
//         }
//       });
//     }
//   });
// }

// window.addEventListener('scroll', setActiveLink);

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
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
  const currentPos = window.scrollY + headerHeight + 10;
  document.querySelectorAll('section').forEach(section => {
    if (
      section.offsetTop <= currentPos &&
      section.offsetTop + section.offsetHeight > currentPos
    ) {
      const id = section.getAttribute('id');
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink);
