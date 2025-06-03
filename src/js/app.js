// app.js
// Entry point for your web app framework

document.addEventListener("DOMContentLoaded", () => {
  console.log("My Web App Framework Loaded");
  // You can initialize components here, e.g.:
  // initModal();

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});
