const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function () {
  if (window.scrollY > 1) {
    navbar.classList.add("scrolled");
    // Ubah warna teks navbar saat di-scroll
    navLinks.forEach((link) => (link.style.color = "#fff"));
  } else {
    navbar.classList.remove("scrolled");
    // Kembalikan warna teks navbar saat di awal
    navLinks.forEach((link) => (link.style.color = "#000"));
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const arrowContainer = document.querySelector(".arrow-container");

  arrowContainer.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
