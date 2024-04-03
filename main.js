function toggleMenu() {
  const manu = document.querySelector(".menu-links");
  const icon = document.querySelector(".humburger-icon");
  manu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.onload = function () {
  const date = new Date();
  let Year = date.getFullYear();
  document.querySelector(".Year").innerHTML = Year;
};
