// 'use strict'

const menuToggle = document.querySelector('.menu-toggle');
const menuBars = document.querySelector('.menu');
// const closeX = document.querySelector('.close');

const navBar = document.querySelector('.navbar');

// --- open menu ---

menuBars.addEventListener('click', (e)=> {
    if(navBar.classList.contains('show-navbar')) {
        navBar.classList.remove('show-navbar');
    } else {
        navBar.classList.add('show-navbar');
    }
})

// --- close menu ---

// closeX.addEventListener('click', (e)=> {
//     if(e.target.classList.contains('close')){
//         navBar.classList.remove('show-navbar');
//         // menuBars.classList.remove('hide-close');
//         // closeX.classList.remove('show-close');
//     }
// })
