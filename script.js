// ===== Typed.js for Animated Hero Text =====
document.addEventListener("DOMContentLoaded", function () {
  if (window.Typed) {
    new Typed('#element', {
      strings: [
        'Web Designer',
        'Cybersecurity Enthusiast',
        'Python Programmer',
        'Frontend Developer'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true
    });
  }

  // ===== Menu Toggle Functionality =====
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".Right");
  if (menuToggle && menu) {
    menuToggle.addEventListener("click", function () {
      menu.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });
  }

  // ===== Sticky Navigation Bar Functionality =====
  const navbar = document.querySelector("nav");
  if (navbar) {
    const sticky = navbar.offsetTop;
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
        document.body.classList.add("sticky-nav-active");
      } else {
        navbar.classList.remove("sticky");
        document.body.classList.remove("sticky-nav-active");
      }
    });
  }

  // ===== Scroll-to-Top Button Logic =====
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

  // ===== Contact Form Validation & Submission =====
  const form = document.getElementById("contact-form");
  const statusText = document.getElementById("form-status");
  if (form && statusText) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();
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
  }

  // ===== Theme Toggle (Light/Dark Mode) =====
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      const html = document.documentElement;
      const currentTheme = html.getAttribute("data-theme");
      if (currentTheme === "dark") {
        html.removeAttribute("data-theme");
        themeToggle.textContent = "🌙";
      } else {
        html.setAttribute("data-theme", "dark");
        themeToggle.textContent = "☀️";
      }
    });
  }
});
