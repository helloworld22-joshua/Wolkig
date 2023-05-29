"use strict";

// declare variables for better overview
let menu = document.querySelector(".menu").dataset;
let nav = document.querySelector("nav").dataset;

// Set menu data true when false and vice versa
function toggleNav() {
    menu.menu = menu.menu === "true" ? "false" : "true";
}

// Show, hide, change color of nav depending on scroll position
window.onscroll = () => {
    if (this.lastScroll > this.scrollY) {    // Scroll up
            if (this.scrollY == 0) {     // At top
                nav.scroll = "top";
            } else {
                nav.scroll = "up";
            }
    } else {     // Scroll down
        nav.scroll = "down";
    }

    this.lastScroll = this.scrollY;
}

// If anything besides the menu is clicked, menu data will be set false
window.onclick = (e) => {
    if (!e.target.matches(".menu *")) menu.menu = "false";
}