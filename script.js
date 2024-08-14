// Add event listeners to the nav links to scroll to the corresponding section
document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const sectionId = link.getAttribute("href");
      const section = document.querySelector(sectionId);
      section.scrollIntoView({ behavior: "smooth" });
    });
  });
});

// Add a fade-in effect to the images
const images = document.querySelectorAll("img");
images.forEach(function(image) {
  image.addEventListener("load", function() {
    image.classList.add("fade-in");
  });
});
