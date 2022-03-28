/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
  }
  showMenu('nav-toggle','nav-menu')
  
  /*===== REMOVE MENU MOBILE =====*/
  const navLink = document.querySelectorAll('.nav__link')
  
  function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))
  
  /*===== SCROLL SECTIONS ACTIVE LINK =====*/
  const sections = document.querySelectorAll('section[id]')
  
  window.addEventListener('scroll', scrollActive)
  
  function scrollActive(){
    const scrollY = window.pageYOffset
  
    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
  
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
  }








/* =============== Swiper =============== */
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