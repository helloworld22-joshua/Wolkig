function toggleNav() {
    document.querySelector(".menu").dataset.nav = document.querySelector(".menu").dataset.nav === "true" ? "false" : "true";
}

let nav = document.querySelector("nav").style;

window.onscroll = () => {
    if (this.oldScroll > this.scrollY) {
        if (this.scrollY > 0) {
            nav.backgroundColor = "f00";
        } else {
            nav.backgroundColor = "#0f0";
        }
    } else {
        nav.backgroundColor = "00f";
    }

    this.oldScroll = this.scrollY;
}