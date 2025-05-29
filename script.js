document.addEventListener("DOMContentLoaded", function () {
  // Welcome Animation
  const welcomeAnimation = document.getElementById("welcome-animation");
  setTimeout(() => {
    welcomeAnimation.style.display = "none";
  }, 3000); // Match animation duration (3s)

  // Theme Toggle Functionality
  const toggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;

  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlElement.setAttribute("data-theme", savedTheme);
  toggle.textContent = savedTheme === "high-neon" ? "🌌" : "⚡️";

  // Toggle between dark and high-neon modes
  toggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "high-neon" : "dark";
    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    toggle.textContent = newTheme === "high-neon" ? "🌌" : "⚡️";
    toggle.style.transform = newTheme === "high-neon" ? "rotate(180deg)" : "rotate(0deg)";
  });

  // Menu Toggle Functionality
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".right");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("open");
    menuToggle.style.transform = menuToggle.classList.contains("open")
      ? "rotate(90deg)"
      : "rotate(0deg)";
  });

  // Sticky Navigation Bar
  const navbar = document.querySelector("nav");
  const sticky = navbar.offsetTop;

  window.onscroll = function () {
    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  };

  // Scroll-to-Top Button
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
      scrollToTopButton.style.opacity = "1";
      scrollToTopButton.style.transform = "translateY(0)";
    } else {
      scrollToTopButton.style.opacity = "0";
      scrollToTopButton.style.transform = "translateY(20px)";
    }
  });

  // Smooth Scroll for Navigation Links
  document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
      menu.classList.remove("active");
      menuToggle.classList.remove("open");
      menuToggle.style.transform = "rotate(0deg)";
    });
  });

  // Form Submission Logic
  const form = document.getElementById("contact-form");
  const submitButton = document.getElementById("submit-form");
  const statusText = document.getElementById("form-status");

  submitButton.addEventListener("click", async function () {
    const formData = new FormData(form);
    statusText.style.color = "#78909c"; // --text-muted
    statusText.textContent = "⚙️ Sending...";

    try {
      const response = await fetch("https://formspree.io/f/mnndjpkj", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });

      if (response.ok) {
        form.reset();
        statusText.style.color = "#d81b60"; // --highlight-color
        statusText.textContent = "✅ Message sent successfully!";
      } else {
        statusText.style.color = "#ff1744";
        statusText.textContent = "❌ Failed to send. Try again later.";
      }
    } catch (error) {
      statusText.style.color = "#ff1744";
      statusText.textContent = "❌ Error: Network problem.";
    }
  });

  // Scroll Animation for Sections
  const animatedElements = document.querySelectorAll('[data-animate="fade-in"]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});