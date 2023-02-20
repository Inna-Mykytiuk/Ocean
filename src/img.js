var device = navigator.userAgent.toLowerCase();
var mob = device.match(
  /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/
);
if (mob) {
  $('.bg-cover').removeClass('bg-fixed');
}
