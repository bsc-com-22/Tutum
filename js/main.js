// Get DOM elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const body = document.body;

// Toggle menu function
function toggleMenu() {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
  body.classList.toggle("menu-open");
}

// Add click event listener to hamburger menu
menuToggle.addEventListener("click", toggleMenu);

// Close menu when clicking on nav links (mobile)
navLinks.addEventListener("click", function (e) {
  if (e.target.tagName === "A") {
    // Close menu when a link is clicked
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    body.classList.remove("menu-open");
  }
});

// Close menu when clicking outside (optional enhancement)
document.addEventListener("click", function (e) {
  if (window.innerWidth <= 768) {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
      body.classList.remove("menu-open");
    }
  }
});

// Handle window resize
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    // Reset menu state when switching to desktop view
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
    body.classList.remove("menu-open");
  }
});

// Prevent menu from staying open during orientation change
window.addEventListener("orientationchange", function () {
  setTimeout(function () {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove("active");
      navLinks.classList.remove("active");
      body.classList.remove("menu-open");
    }
  }, 100);
});
