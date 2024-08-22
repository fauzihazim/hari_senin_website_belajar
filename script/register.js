const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#kataSandi');

togglePassword.addEventListener("click", function () {
    if (password.type === "password") {
      password.type = "text";
      togglePassword.classList.remove("fa-eye");
      togglePassword.classList.add("fa-eye-slash");
    } else {
      password.type = "password";
      togglePassword.classList.remove("fa-eye-slash");
      togglePassword.classList.add("fa-eye");
    }
});

const toggleKonfirmasiPassword = document.querySelector('#toggleKonfirmasiPassword');
const konfirmasiPassword = document.querySelector('#konfirmasiKataSandi');

toggleKonfirmasiPassword.addEventListener("click", function () {
    if (konfirmasiPassword.type === "password") {
        konfirmasiPassword.type = "text";
        toggleKonfirmasiPassword.classList.remove("fa-eye");
        toggleKonfirmasiPassword.classList.add("fa-eye-slash");
    } else {
        konfirmasiPassword.type = "password";
        toggleKonfirmasiPassword.classList.remove("fa-eye-slash");
        toggleKonfirmasiPassword.classList.add("fa-eye");
    }
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}