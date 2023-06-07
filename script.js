"use strict";

// declare variables for better overview
let menuData = document.querySelector(".menu").dataset;
let navData = document.querySelector("nav").dataset;

// Set menuData true when false and vice versa
function toggleNav() {
    menuData.menu = menuData.menu === "true" ? "false" : "true";
}

// Show, hide, change color of nav depending on scroll position
window.addEventListener("scroll", () => {
    if (this.lastScroll > this.scrollY) {    // Scroll up
        if (this.scrollY === 0) {     // At top
            navData.scroll = "top";
        } else {
            navData.scroll = "up";
        }
    } else {     // Scroll down
        navData.scroll = "down";
    }

    this.lastScroll = this.scrollY;
});

// If anything besides the menu is clicked, menuData will be set false
window.addEventListener("click", (e) => {
    if (!e.target.matches(".menu *")) menuData.menu = "false";
});