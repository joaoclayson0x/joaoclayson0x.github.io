const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const topBtn = document.querySelector(".top-btn");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuIcon.classList.toggle("fa-xmark");
});

window.addEventListener("scroll", () => {
    let top = window.scrollY;

    sections.forEach((section) => {
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
            });

            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });

    navbar.classList.remove("active");
    menuIcon.classList.remove("fa-xmark");

    if (window.scrollY > 500) {
        topBtn.classList.add("show-btn");
    } else {
        topBtn.classList.remove("show-btn");
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".hidden").forEach((element) => {
    observer.observe(element);
});

window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});