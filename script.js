let slideIndex = 0;

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  // Remove 'active' from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show current slide and activate dot
  slides[slideIndex - 1].style.display = "block";
  if (dots.length >= slideIndex) {
    dots[slideIndex - 1].className += " active";
  }

  // Repeat every 5 seconds
  setTimeout(showSlides, 5000);
}

function showSection(section) {
  const pages = document.getElementsByClassName("page");

  Array.from(pages).forEach((page) => {
    page.classList.remove("active"); // remove active from all
  });

  const activePage = document.getElementById(section);
  activePage.classList.add("active"); // add active to the selected page
}

// Automatically start when the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  showSlides();
});
