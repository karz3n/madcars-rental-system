document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const errorMessage = document.getElementById("errorMessage");

  if (!form) {
    console.error("❌ loginForm not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const validUsername = "customer";
    const validPassword = "1234";

    if (username === validUsername && password === validPassword) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = "index.html"; 
    } else {
      errorMessage.style.display = "block";
      errorMessage.textContent = "Invalid username or password.";
    }
  });
});
