window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--menu_scroll"):document.body.classList.remove("page__body--menu_scroll")});var e=document.querySelectorAll(".galery__photo--slider img"),t=document.querySelector(".prev-btn"),n=document.querySelector(".next-btn"),o=0;function d(){e.forEach(function(e){e.style.display="none"}),e[o].style.display="block"}t.addEventListener("click",function(){--o<0&&(o=e.length-1),d()}),n.addEventListener("click",function(){++o>=e.length&&(o=0),d()}),d(),window.addEventListener("resize",function(){var e=window.innerWidth,t=document.querySelector(".header");t.style.width=window.innerWidth+"px",document.body.style.overflowX="hidden",e<1300?t.classList.remove(".header"):t.classList.add(".header")});var s=document.querySelector(".header__tickets"),r=document.querySelector(".header__button");function i(){s.classList.add("hovered"),r.classList.add("hovered")}function c(){s.classList.remove("hovered"),r.classList.remove("hovered")}s.addEventListener("mouseover",i),s.addEventListener("mouseout",c),r.addEventListener("mouseover",i),r.addEventListener("mouseout",c);/* const menu = document.querySelector('.page__menu');
const body = document.querySelector('body');
const html = document.querySelector('html');

function enableScroll() {
  html.style.overflow = 'auto';
  body.style.overflow = 'auto';
}

function disableScroll() {
  html.style.overflow = 'hidden';
  body.style.overflow = 'hidden';
}

menu.addEventListener('click', enableScroll);

const burger = document.querySelector('.header__menu-link');

burger.addEventListener('click', disableScroll);

disableScroll();
enableScroll(); *///# sourceMappingURL=index.7a6f7e97.js.map

//# sourceMappingURL=index.7a6f7e97.js.map
