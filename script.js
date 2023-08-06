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

/* // Smooth load in animation
function reveal() {
    let reveals = $("section *");

    for (let i = 0; i < reveals.length; i++) {
        reveals[i].getBoundingClientRect().top < window.innerHeight - 150 ?
            reveals[i].classList.add("active")
        :
            reveals[i].classList.remove("active");
    }
}

window.addEventListener("scroll", reveal); */

// Carousel
const state = {};
const carouselList = document.querySelector('.carousel-list');
const carouselItems = document.querySelectorAll('.carousel-item');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
    var newActive = event.target;
    var isItem = newActive.closest('.carousel-item');

    if (!isItem || newActive.classList.contains('carousel-item-active')) {
        return;
    };

    update(newActive);
});

const update = function(newActive) {
    const newActivePos = newActive.dataset.pos;

    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first = elems.find((elem) => elem.dataset.pos == -2);
    const last = elems.find((elem) => elem.dataset.pos == 2);

    current.classList.remove('carousel-item-active');

    [current, prev, next, first, last].forEach(item => {
        var itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos)
    });
};

const getPos = function (current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
        return -current
    }

    return diff;
}