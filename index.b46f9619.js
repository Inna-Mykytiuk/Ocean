document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector("#header"),t=document.querySelector("#intro"),o=document.querySelectorAll('#nav a[href^="#"]'),n=document.querySelector("#nav_toggle"),c=(document.querySelectorAll("[data-collapse]"),t.offsetHeight);function i(){(window.pageYOffset||document.documentElement.scrollTop)>=c?e.classList.add("fixed"):e.classList.remove("fixed")}window.pageYOffset||document.documentElement.scrollTop,i(),window.addEventListener("scroll",i),o.forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var t=document.querySelector(this.getAttribute("href"));if(t){var n=t.offsetTop-100;window.scrollTo({top:n,behavior:"smooth"}),o.forEach((function(e){return e.classList.remove("active")})),this.classList.add("active")}}))}));var a=e.offsetHeight,d=e.getBoundingClientRect().top+window.pageYOffset;window.addEventListener("scroll",(function(){window.pageYOffset>d?(document.body.style.paddingTop=a+"px",e.classList.add("fixed")):(document.body.style.paddingTop=0,e.classList.remove("fixed"))})),window.addEventListener("scroll",(function(){var e=window.scrollY+a+100;document.querySelectorAll("section").forEach((function(t){var o=t.getAttribute("id"),n=document.querySelector('#nav a[href="#'.concat(o,'"]'));n&&t.offsetTop-a-100<=e&&t.offsetTop+t.offsetHeight-a>e?n.classList.add("active"):n&&n.classList.remove("active")}))}));var s=document.querySelector("#nav_toggle"),l=document.querySelector("#nav");s&&l&&s.addEventListener("click",(function(e){e.preventDefault(),n.classList.toggle("active"),l.classList.toggle("active")})),document.querySelectorAll("[data-collapse]").forEach((function(e){e&&e.addEventListener("click",(function(t){t.preventDefault(),e.classList.toggle("active")}))}))}));
//# sourceMappingURL=index.b46f9619.js.map
