document.addEventListener("DOMContentLoaded", function() {
    const ham = document.querySelector(".header-ham");
    const nav = document.querySelector("nav ul");

    ham.addEventListener("click", function() {
        nav.classList.toggle("open");
    });
});
