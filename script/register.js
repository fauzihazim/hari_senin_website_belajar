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