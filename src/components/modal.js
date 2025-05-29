// modal.js
// Example JS module for a modal component

export function initModal() {
  document.querySelectorAll('[data-toggle="modal"]').forEach((btn) => {
    btn.addEventListener("click", () => {
      const modal = document.querySelector(btn.dataset.target);
      modal.classList.toggle("hidden");
    });
  });
}

// Usage (if bundling/modules):
// import { initModal } from './components/modal.js';
// document.addEventListener('DOMContentLoaded', initModal);
