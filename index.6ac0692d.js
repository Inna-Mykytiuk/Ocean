document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#header"),t=document.querySelector("#intro");document.querySelectorAll('#nav a[href^="#"]'),document.querySelector("#nav_toggle"),document.querySelectorAll("[data-collapse]");let o=t.offsetHeight,n=window.pageYOffset||document.documentElement.scrollTop;function d(){n=window.pageYOffset||document.documentElement.scrollTop,n>=o?e.classList.add("fixed"):e.classList.remove("fixed")}d(),window.addEventListener("scroll",d)})),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault();const t=document.querySelector(this.getAttribute("href"));if(t){const e=t.offsetTop-100;window.scrollTo({top:e,behavior:"smooth"}),navLinks.forEach((t=>{t.classList.remove("active");const o=document.querySelector(t.hash);o.offsetTop<=e&&o.offsetTop+o.offsetHeight>e&&t.classList.add("active")}))}}))}));const e=document.querySelector(".header"),t=e.offsetHeight,o=e.getBoundingClientRect().top+window.pageYOffset;window.addEventListener("scroll",(function(){window.pageYOffset>o?(document.body.style.paddingTop=t+"px",e.classList.add("fixed")):(document.body.style.paddingTop=0,e.classList.remove("fixed"))}));
//# sourceMappingURL=index.6ac0692d.js.map