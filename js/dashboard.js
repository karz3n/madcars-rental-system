const loggedIn = localStorage.getItem("isLoggedIn");
if (loggedIn !== "true") {
  window.location.href = "login.html";
}

const logoutButtons = document.querySelectorAll(".logout-button button, .settings-list a[href='#']");

logoutButtons.forEach(button => {
  button.addEventListener("click", (e) => {
    const isLogout = button.textContent.includes("Logout") || button.textContent.includes("🚪");
    if (isLogout) {
      e.preventDefault();
      localStorage.removeItem("isLoggedIn");
      window.location.href = "login.html";
    }
  });
});

const toggleBtn = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar-container");
const main = document.querySelector("main");

if (toggleBtn && sidebar && main) {
  toggleBtn.addEventListener("click", () => {
    sidebar.classList.toggle("sidebar-hidden");
    main.classList.toggle("main-expanded");
  });
}
