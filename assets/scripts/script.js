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
    //  section.classList.add('section-hidden')
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

// Changing section-2's imgs 
// const sec2Items = document.querySelectorAll('.item')
// console.log(sec2Items)

// const screenW = screen.width;
// console.log(screenW)

// sec2Items.forEach(function(i) {
//     i.classList.add('responsive');
// })

// const adjustSec2Items = function() {
//     if(screenW < 900) {
//         sec2Items.forEach(function(i) {
//             i.style.display = 'none'
//         })

//         // body.style.backgroundColor = 'red'
//     }
// }
// adjustSec2Items()