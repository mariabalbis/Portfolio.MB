function toggleDropdown(id, btn) {
  const el = document.getElementById(id);
  const all = document.querySelectorAll(".dropdown");
  const buttons = document.querySelectorAll(".menu button");

  all.forEach(d => d.style.display = "none");

  buttons.forEach(b => b.classList.remove("active"));

  el.style.display = "block";

  btn.classList.add("active");
}
