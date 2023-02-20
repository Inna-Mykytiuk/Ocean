// const device = navigator.userAgent.toLowerCase();
// const mob =
//   // /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(device);
//   /webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(device);

// if (mob) {
//   const bgCover = document.querySelector('.bg-cover');
//   bgCover.classList.remove('bg-fixed');
// }

const device = navigator.userAgent.toLowerCase();
const isIOS = /(iPhone|iPad|iPod)/.test(device);

if (isIOS) {
  const bgCover = document.querySelector('.bg-cover');
  bgCover.classList.remove('bg-fixed');
}
