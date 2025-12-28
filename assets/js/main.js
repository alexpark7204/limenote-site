
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-include]").forEach(el => {
    const file = el.getAttribute("data-include");
    if (!file) return;
    fetch(file)
      .then(res => res.text())
      .then(html => { el.innerHTML = html; })
      .catch(err => console.error("include error:", file, err));
  });
});
