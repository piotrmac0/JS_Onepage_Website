const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav_link").forEach(n => n.
    addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))




/* Initialize Swiper */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor:true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



/* cookie banner */
const cookiePopup = document.querySelector(".cookiePopup");
const btnCookie = document.querySelector(".acceptCookie");

if(btnCookie) {
btnCookie.addEventListener("click", () => {
cookiePopup.classList.add("active");
localStorage.setItem("cookieBannerDisplayed", "true");
});
}

setTimeout(() => {
if(!localStorage.getItem("cookieBannerDisplayed"))
cookiePopup.classList.remove("active");
}, 2000);



