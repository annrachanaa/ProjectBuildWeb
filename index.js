// // Import components
// import { HomeComponent, AboutComponent, ContactComponent} from "./components/page.js";

// // Function to load the selected component
// function loadComponent(component) {
//   component(); // Call the component function to fetch and display HTML
// }

// // Event listeners for buttons
// document
//   .getElementById("home-button")
//   .addEventListener("click", () => loadComponent(HomeComponent));
// document
//   .getElementById("about-button")
//   .addEventListener("click", () => loadComponent(AboutComponent));
//   document
//   .getElementById("contact-button")
//   .addEventListener("click", () => loadComponent(ContactComponent));
// Import components
import {
  HomeComponent,
  AboutComponent,
  MenuComponent,
  CategoriesComponent,
  ContactComponent,
  TeamComponent,
  ReservationComponent,
  BlogComponent,
} from "./components/page.js";

// Function to load the selected component
function loadComponent(component) {
  component(); // Call the component function to fetch and display HTML
}

// Event listeners for buttons
document
  .getElementById("home-button")
  .addEventListener("click", () => loadComponent(HomeComponent));
document
  .getElementById("about-button")
  .addEventListener("click", () => loadComponent(AboutComponent));
document
.getElementById("menu-button")
.addEventListener("click", () => loadComponent(MenuComponent));
document
.getElementById("categories-button")
.addEventListener("click", () => loadComponent(CategoriesComponent));
document
.getElementById("reservation-button")
.addEventListener("click", () => loadComponent(ReservationComponent));
document
.getElementById("blog-button")
.addEventListener("click", () => loadComponent(BlogComponent));
document
  .getElementById("contact-button")
  .addEventListener("click", () => loadComponent(ContactComponent));
document
  .getElementById("team-button")
  .addEventListener("click", () => loadComponent(TeamComponent));

// Load the homepage by default when the document is ready
document.addEventListener("DOMContentLoaded", function () {
  loadComponent(HomeComponent);
  const navLinks = document.querySelectorAll(".navbar-nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Instantly scroll to the top of the page
      window.scrollTo(0, 0);

      // Load new content here if using dynamic content loading
    });
  });
});
