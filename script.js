"use strict";

const nav = document.querySelector("#main");
let navTop = nav.offsetTop;

function onHandle() {
  const check = window.scrollY;
  if (check >= navTop) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
  } else {
    document.body.classList.remove("fixed-nav");
    document.body.style.paddingTop = 0;
  }
}

window.addEventListener("scroll", onHandle);
