// document.addEventListener('DOMContentLoaded', () => {
//   const header = document.querySelector('#header');
//   const intro = document.querySelector('#intro');
//   const navLinks = document.querySelectorAll('#nav a[href^="#"]');
//   const navToggle = document.querySelector('#nav_toggle');
//   const collapseLinks = document.querySelectorAll('[data-collapse]');

//   let introHeight = intro.offsetHeight;
//   let scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

//   // Fixed Header
//   checkScroll();

//   window.addEventListener('scroll', checkScroll);

//   function checkScroll() {
//     scrollOffset = window.pageYOffset || document.documentElement.scrollTop;
//     if (scrollOffset >= introHeight) {
//       header.classList.add('fixed');
//     } else {
//       header.classList.remove('fixed');
//     }
//   }

//   // Smooth scrolling and active link
//   navLinks.forEach(link => {
//     link.addEventListener('click', function (e) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute('href'));
//       if (target) {
//         const offsetTop = target.offsetTop - 100;
//         window.scrollTo({
//           top: offsetTop,
//           behavior: 'smooth',
//         });

//         navLinks.forEach(link => link.classList.remove('active'));
//         this.classList.add('active');
//       }
//     });
//   });

//   // Fixed header
//   const headerHeight = header.offsetHeight;
//   const headerTop = header.getBoundingClientRect().top + window.pageYOffset;

//   function fixHeader() {
//     if (window.pageYOffset > headerTop) {
//       document.body.style.paddingTop = headerHeight + 'px';
//       header.classList.add('fixed');
//     } else {
//       document.body.style.paddingTop = 0;
//       header.classList.remove('fixed');
//     }
//   }

//   window.addEventListener('scroll', fixHeader);

//   // Update active navigation link
//   function setActiveLink() {
//     const offset = 100;
//     const currentPos = window.scrollY + headerHeight + offset;
//     document.querySelectorAll('section').forEach(section => {
//       const id = section.getAttribute('id');
//       const link = document.querySelector(`#nav a[href="#${id}"]`);
//       if (
//         section.offsetTop - headerHeight - offset <= currentPos &&
//         section.offsetTop + section.offsetHeight - headerHeight > currentPos
//       ) {
//         link.classList.add('active');
//       } else {
//         link.classList.remove('active');
//       }
//     });
//   }

//   window.addEventListener('scroll', setActiveLink);

//   const navtoggle = document.querySelector('#nav_toggle');
//   const nav = document.querySelector('#nav');

//   navtoggle.addEventListener('click', function (event) {
//     event.preventDefault();

//     navToggle.classList.toggle('active');
//     nav.classList.toggle('active');
//   });

//   // Collapse
//   const collapseElements = document.querySelectorAll('[data-collapse]');

//   collapseElements.forEach(function (element) {
//     element.addEventListener('click', function (event) {
//       event.preventDefault();

//       element.classList.toggle('active');
//     });
//   });
// });

///4444444444444444444
document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('#header');
  const intro = document.querySelector('#intro');
  const navLinks = document.querySelectorAll('#nav a[href^="#"]');
  const navToggle = document.querySelector('#nav_toggle');
  const collapseLinks = document.querySelectorAll('[data-collapse]');

  let introHeight = intro.offsetHeight;
  let scrollOffset = window.pageYOffset || document.documentElement.scrollTop;

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

  // Smooth scrolling and active link
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - header.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });

        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Update active navigation link
  function setActiveLink() {
    const offset = header.offsetHeight + 100;
    const currentPos = window.scrollY + offset;
    document.querySelectorAll('section').forEach(section => {
      const id = section.getAttribute('id');
      const link = document.querySelector(`#nav a[href="#${id}"]`);
      if (
        link &&
        section.offsetTop - offset <= currentPos &&
        section.offsetTop + section.offsetHeight > currentPos
      ) {
        link.classList.add('active');
      } else if (link) {
        link.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);

  const navtoggle = document.querySelector('#nav_toggle');
  const nav = document.querySelector('#nav');

  navtoggle.addEventListener('click', function (event) {
    event.preventDefault();

    navToggle.classList.toggle('active');
    nav.classList.toggle('active');
  });

  // Collapse
  const collapseElements = document.querySelectorAll('[data-collapse]');

  collapseElements.forEach(function (element) {
    element.addEventListener('click', function (event) {
      event.preventDefault();

      element.classList.toggle('active');
    });
  });

  // Close modal when link is clicked
  const modalLinks = document.querySelectorAll('#nav a[href^="#"]');
  modalLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offsetTop = target.offsetTop - header.offsetHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });

        navToggle.classList.remove('active');
        nav.classList.remove('active');
      }
    });
  });
});
