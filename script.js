
// Dark and Light Theme

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.innerText = "☀️";
    } else {
        themeBtn.innerText = "🌙";
    }

});


// Mobile Menu

const menuBtn = document.getElementById("menuBtn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// Close Mobile Menu after clicking link

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// Project Popup

const projectBtn = document.getElementById("projectBtn");

const projectModal = document.getElementById("projectModal");

const closeModal = document.getElementById("closeModal");

projectBtn.addEventListener("click", function() {

    projectModal.style.display = "flex";

});

closeModal.addEventListener("click", function() {

    projectModal.style.display = "none";

});

projectModal.addEventListener("click", function(event) {

    if (event.target === projectModal) {

        projectModal.style.display = "none";

    }

});
