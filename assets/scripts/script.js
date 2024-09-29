"use strict"


// Reveal sections
const sections = document.querySelectorAll('.section');
const revealSection = function(entries, observer) {
    const [entry] = entries;
    // console.log(entry)

    if(!entry.isIntersecting) return;

    entry.target.classList.remove('section-hidden')
    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1,
})
sections.forEach(function(section) {
    sectionObserver.observe(section);
     section.classList.add('section-hidden')
    })


// Menu fade animation 
const nav = document.querySelector('.navbar');
const showNavItem = function(e) {
    if(e.target.classList.contains('nav-item')){
        const clicked = e.target;
        const siblings = clicked.closest('.navbar').querySelectorAll('.nav-item');
        const logo = clicked.closest('.navbar').querySelector('.logo');

        siblings.forEach(el => {if(el !== clicked)el.style.opacity = this})
            logo.style.opacity = this;
    }

}

nav.addEventListener('mouseover', showNavItem.bind(0.5))
nav.addEventListener('mouseout', showNavItem.bind(1))

const menuIcon = document.querySelector('.menu-icon')

menuIcon.addEventListener('click', function(e) {


const clicked = e.target;
// console.log(nav.id)

if(!nav.id) {
    nav.id = 'mobile-nav';
    menuIcon.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="menu-icon">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>`
}
else {
    nav.removeAttribute("id");
    menuIcon.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="menu-icon">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>`
}
}

)