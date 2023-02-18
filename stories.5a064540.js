const e=document.querySelectorAll(".cards_item");e.forEach((s=>{s.addEventListener("mouseover",(()=>{e.forEach((e=>{e!==s&&e.classList.add("blur")})),s.classList.add("hover")})),s.addEventListener("mouseout",(()=>{e.forEach((e=>{e.classList.remove("blur"),e.classList.remove("hover")}))}))}));
//# sourceMappingURL=stories.5a064540.js.map
