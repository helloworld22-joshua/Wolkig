function toggleNav() {
    document.querySelector(".menu").dataset.nav = document.querySelector(".menu").dataset.nav === "true" ? "false" : "true";
}

let nav = document.querySelector("nav").style;

window.onscroll = () => {
    if (this.oldScroll > this.scrollY) {
        if (this.scrollY > 0) {
            nav.top = "0";
        } else {
            nav.backgroundColor = "#0f0";
        }
    } else {
        nav.top = "-100px";
    }

    this.oldScroll = this.scrollY;
}