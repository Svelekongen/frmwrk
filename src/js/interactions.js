// interactions.js
// Simple interaction helpers (e.g. modals)

document.querySelectorAll('[data-toggle="modal"]').forEach((btn) => {
  btn.addEventListener("click", () => {
    const target = document.querySelector(btn.dataset.target);
    if (target) target.classList.toggle("hidden");
  });
});
