const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");
const year = document.getElementById("year");

if (year) year.textContent = new Date().getFullYear();

navToggle?.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") document.documentElement.classList.add("light");

themeToggle?.addEventListener("click", () => {
  document.documentElement.classList.toggle("light");
  localStorage.setItem("theme", document.documentElement.classList.contains("light") ? "light" : "dark");
});
