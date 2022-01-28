const showMenu = (e, n) => {
    const t = document.getElementById(e),
        i = document.getElementById(n);
    t && i && t.addEventListener("click", () => {
        i.classList.toggle("show-menu")
    })
};
showMenu("nav-toggle", "nav-menu");
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    document.getElementById("nav-menu").classList.remove("show-menu")
}
navLink.forEach(e => e.addEventListener("click", linkAction));
const accordion = document.getElementsByClassName("contentBx");
for (i = 0; i < accordion.length; i++) accordion[i].addEventListener("click", function () {
    this.classList.toggle("active")
});
const swiper = new Swiper(".testimonial__container", {
    spaceBetween: 16,
    loop: !0,
    grabCursor: !0,
    pagination: {
        el: ".swiper-pagination",
        clickable: !0
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        968: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});