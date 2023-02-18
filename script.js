function toggleNav() {
    document.querySelector(".menu").dataset.menu = document.querySelector(".menu").dataset.menu === "true" ? "false" : "true";
}

let nav = document.querySelector("nav").dataset;

window.onscroll = () => {
    if (this.oldScroll > this.scrollY) {    // Scroll up
            if (this.scrollY == 0) {     // At top
                nav.scroll = "top";
            } else {
                nav.scroll = "up";
            }
    } else {     // Scroll down
        nav.scroll = "down";
    }

    this.oldScroll = this.scrollY;
}