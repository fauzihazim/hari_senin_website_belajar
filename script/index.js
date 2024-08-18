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