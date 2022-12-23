function toggleNav() {
    document.querySelector(".menu").dataset.nav = document.querySelector(".menu").dataset.nav === "true" ? "false" : "true";
}

let nav = document.querySelector("nav").style;
let menu = document.querySelector("nav .menu").style;

window.onscroll = () => {
    if (this.oldScroll > this.scrollY) {
        if (this.scrollY > 0) {     // Scroll up
            nav.top = "0";
            menu.opacity = "1";
            nav.backgroundColor = "var(--sec-color)";
        } else {     // At top
            nav.background = "none";
        }
    } else {     // Scroll down
        nav.top = "-100px";
        menu.opacity = "0";
    }

    this.oldScroll = this.scrollY;
}