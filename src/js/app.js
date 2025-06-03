// app.js
// Entry point for your web app framework
import { initModal } from "../components/modal.js";

document.addEventListener("DOMContentLoaded", () => {
  console.log("My Web App Framework Loaded");
  initModal();

  const toggle = document.getElementById("themeToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});
