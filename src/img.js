const mediaFiles = document.querySelectorAll('img, video');

function iosChecker() {
  const isIos =
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  return isIos;
}

function handleMediaFiles() {
  const isIos = iosChecker();
  if (isIos) {
    mediaFiles.forEach(media => {
      media.setAttribute('playsinline', '');
      media.setAttribute('controls', '');
    });
  }
}

handleMediaFiles();
