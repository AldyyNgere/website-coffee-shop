// Display Year
let displayYear = document.getElementById("displayYear");
const date = new Date();
let year = date.getFullYear();
displayYear.textContent = year;

// Mobile Button
const mobileBtn = () => {
  let menu = document.querySelector(".main-nav-links");
  let mobileBtn = document.getElementById("mobile-btn");
  let menuBtn = document.getElementById("menu-btn");
  let closeBtn = document.getElementById("close-btn");

  mobileBtn.onclick = () => {
    menuBtn.classList.toggle("active");
    closeBtn.classList.toggle("active");
    menu.classList.toggle("active");
  };
};

mobileBtn();
