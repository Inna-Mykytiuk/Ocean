// const device = navigator.userAgent.toLowerCase();
// const mob =
//   // /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(device);
//   /webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(device);

// if (mob) {
//   const bgCover = document.querySelector('.bg-cover');
//   bgCover.classList.remove('bg-fixed');
// }

// main-header bg-cover bg-fixed

// .main-header {
//   background-image: url(../images/octopus@2.webp);
//   width: 100%;
//   height: 450px;
// }
// .bg-cover {
//   background-repeat: no-repeat;
//   background-position: center center;
//   background-size: cover;
//   -webkit-background-size: cover;
// }
// .bg-fixed {
//   background-attachment: fixed;
// }
const device = navigator.userAgent.toLowerCase();
const mob = /webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
  device
);

if (mob) {
  // const bgCover = document.querySelector('.bg-cover');
  // bgCover.classList.remove('bg-fixed');

  const hiddenPart = document.querySelector('.hero3, .hero2');
  hiddenPart.style.display = 'none';
}
