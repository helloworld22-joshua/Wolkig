function toggleNav() {
    document.querySelector(".menu").dataset.nav = document.querySelector(".menu").dataset.nav === "true" ? "false" : "true";
}

let nav = document.querySelector("nav").style;
let menu = document.querySelector("nav .menu").style;

window.onscroll = () => {
    if (this.oldScroll > this.scrollY) {
        if (this.scrollY > 0) {     // Scroll up
            nav.top = "0";
            nav.backgroundColor = "var(--sec-color)";
            menu.bottom = "-75vh";
            menu.opacity = "1";
        } else {     // At top
            nav.background = "none";
        }
    } else {     // Scroll down
        nav.top = "-90px";
        menu.bottom = "calc(-75vh - 90px)";
        if (!document.querySelector(".menu").dataset.nav) {
            menu.opacity = "0";
        }
    }
    console.log(window.innerWidth);
    this.oldScroll = this.scrollY;
}