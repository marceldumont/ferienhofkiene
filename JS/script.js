// assets/script.js

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation
  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
      mainNav.classList.toggle("open");
    });
  }

  // Wohnungskarussell auf Startseite
  const carousel = document.querySelector(".carousel");
  if (carousel) {
    const inner = carousel.querySelector(".carousel-inner");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const btnPrev = carousel.querySelector("[data-carousel-prev]");
    const btnNext = carousel.querySelector("[data-carousel-next]");
    const dotsContainer = carousel.querySelector(".carousel-dots");

    let currentIndex = 0;

    if (!inner || slides.length === 0) return;

    // Dots erzeugen
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.className = "carousel-dot" + (index === 0 ? " is-active" : "");
      dot.type = "button";
      dot.addEventListener("click", () => gotoSlide(index));
      dotsContainer?.appendChild(dot);
    });

    const dots = carousel.querySelectorAll(".carousel-dot");

    function gotoSlide(index) {
      currentIndex = (index + slides.length) % slides.length;
      inner.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, i) =>
        dot.classList.toggle("is-active", i === currentIndex)
      );
    }

    btnPrev?.addEventListener("click", () => gotoSlide(currentIndex - 1));
    btnNext?.addEventListener("click", () => gotoSlide(currentIndex + 1));

    // Auto-Slide (optional)
    setInterval(() => {
      gotoSlide(currentIndex + 1);
    }, 8000);
  }
});