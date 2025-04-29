document.addEventListener("DOMContentLoaded", function () {
  // Menu Toggle Functionality
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".Right");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });

  // Sticky Navigation Bar Functionality
  const navbar = document.querySelector("nav");
  const sticky = navbar.offsetTop;

  window.onscroll = function () {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  // Scroll-to-Top Button Logic
  const scrollToTopButton = document.createElement("button");
  scrollToTopButton.innerText = "↑";
  scrollToTopButton.className = "scroll-to-top";
  document.body.appendChild(scrollToTopButton);

  scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // Form Validation Logic
  const form = document.getElementById("contact-form");
  const statusText = document.getElementById("form-status");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // stop default page redirect

    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mnndjpkj", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });

      if (response.ok) {
        form.reset();
        statusText.style.color = "green";
        statusText.textContent = "✅ Message sent successfully!";
      } else {
        statusText.style.color = "red";
        statusText.textContent = "❌ Failed to send. Try again later.";
      }
    } catch (error) {
      statusText.style.color = "red";
      statusText.textContent = "❌ Error: Network problem.";
    }
  });

});

  const toggle = document.getElementById("theme-toggle");
  const lightCssHref = "full-themed-light.css"; // your light CSS file path
  let themeLink = null;

  // Helper to add light theme CSS
  function addLightTheme() {
    themeLink = document.createElement("link");
    themeLink.rel = "stylesheet";
    themeLink.href = lightCssHref;
    themeLink.id = "light-theme-css";
    document.head.appendChild(themeLink);
    toggle.textContent = "☀️";
  }

  // Helper to remove it
  function removeLightTheme() {
    const existing = document.getElementById("light-theme-css");
    if (existing) {
      existing.remove();
    }
    toggle.textContent = "🌙";
  }

  // Load theme from localStorage
  if (localStorage.getItem("theme") === "light") {
    addLightTheme();
  }

  // Toggle button logic
  toggle.addEventListener("click", () => {
    if (localStorage.getItem("theme") === "light") {
      removeLightTheme();
      localStorage.setItem("theme", "dark");
    } else {
      addLightTheme();
      localStorage.setItem("theme", "light");
    }
  });
