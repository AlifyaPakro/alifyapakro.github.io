// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const menunav = document.querySelector(".menunav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menunav.classList.toggle("active");
});

// Close menu when clicking navigation links
document.querySelectorAll(".menunav a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menunav.classList.remove("active");
  })
);
