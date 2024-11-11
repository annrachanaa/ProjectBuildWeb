function loadCSS(fileName) {
  // Remove any existing page-specific CSS
  const existingLink = document.getElementById("page-style");
  if (existingLink) existingLink.remove();

  // Add new page-specific CSS
  const link = document.createElement("link");
  link.id = "page-style";
  link.rel = "stylesheet";
  link.href = `./styles/${fileName}.css`; // Adjust path as needed
  document.head.appendChild(link);
}



export function HomeComponent() {
  // loadCSS("home");
  return fetch("./page/home.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content-container").innerHTML = html;
      loadFooter(); // Load the footer
    });
}

export function AboutComponent() {
  // loadCSS("about");
  return fetch("./page/about.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content-container").innerHTML = html;
      loadFooter(); // Load the footer
    });
}

export function MenuComponent() {
  // loadCSS("menu");
  return fetch("./page/menu.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content-container").innerHTML = html;
      loadFooter(); // Load the footer

    });
}

export function TeamComponent() {
  // loadCSS("team");
  return fetch("./page/team.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content-container").innerHTML = html;
      loadFooter(); // Load the footer
    });
}
export function CategoriesComponent() {
  // loadCSS("categories");
  return fetch("./page/categories.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content-container").innerHTML = html;
      loadFooter(); // Load the footer
    });
}
export function BlogComponent() {
  // loadCSS("blog");
  return fetch("./page/blog.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content-container").innerHTML = html;
      loadFooter(); // Load the footer
    });
}
export function ReservationComponent() {
  // loadCSS("revervation");
  return fetch("./page/reservation.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content-container").innerHTML = html;
      loadFooter(); // Load the footer
    });
}
export function ContactComponent() {
  // loadCSS("contact");
  return fetch("./page/contact.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("content-container").innerHTML = html;
      loadFooter(); // Load the footer
      addFormHandler(); // Attach form handling logic
    });
}

// Function to load the footer HTML
function loadFooter() {
  return fetch("./page/footer.html")
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("footer-container").innerHTML = html;
    });
}









// Form handling function for the Contact page
function addFormHandler() {
  const form = document.getElementById("contact-form"); // Ensure the form ID matches
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent page reload

      const name = form.elements["name"].value;
      const email = form.elements["email"].value;
      const request = form.elements["request"].value;
      const feedback = form.elements["feedback"].value;

      console.log(
        `Form submitted. Name: ${name}, Email: ${email}, Request: ${request}, Feedback: ${feedback}`
      );
      form.reset(); // Optionally clear the form fields
    });
  }
}

// Carousel function for the About page


// Load the Home page immediately when the site is opened
HomeComponent();
