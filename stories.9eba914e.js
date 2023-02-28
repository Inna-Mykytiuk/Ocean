document.querySelectorAll(".music-box__btn").forEach((e=>{const c=e.querySelector(".music__icon");e.addEventListener("click",(()=>{const s=e.querySelector("audio");s.paused?(s.play(),e.classList.add("active"),c.classList.add("active")):(s.pause(),s.currentTime=0,e.classList.remove("active"),c.classList.remove("active"))}))}));
//# sourceMappingURL=stories.9eba914e.js.map
