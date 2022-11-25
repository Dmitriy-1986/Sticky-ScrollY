'use strict';

const nav = document.querySelector('.nav');
const section1 = document.querySelector('.section1');

const section1Coords = section1.getBoundingClientRect();
console.log(section1Coords);

window.addEventListener('scroll', function() {
    if(window.scrollY > section1Coords.bottom) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});