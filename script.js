document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".Right");

  menuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("open");
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

  // // Scroll-to-Top Button
  // const scrollToTopButton = document.createElement('button');
  // scrollToTopButton.innerText = '↑';
  // scrollToTopButton.className = 'scroll-to-top';
  // document.body.appendChild(scrollToTopButton);

  // scrollToTopButton.addEventListener('click', function() {
  //     window.scrollTo({ top: 0, behavior: 'smooth' });
  // });

  // window.addEventListener('scroll', function() {
  //     if (window.scrollY > 300) {
  //         scrollToTopButton.style.display = 'block';
  //     } else {
  //         scrollToTopButton.style.display = 'none';
  //     }
  // });

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

  // Form Validation
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      let valid = true;

      form.querySelectorAll("[required]").forEach((input) => {
        if (!input.value.trim()) {
          valid = false;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });

      if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
        alert("Please fill out all required fields.");
      }
    });
  }
});
 // Function to display the image in the modal
 function showImage() {
  var modal = document.getElementById('myModal');
  var modalImage = document.getElementById('modalImage');

  // Set the image source to the desired image
  modalImage.src = 'img/ct.jpg'; // Replace with your image URL

  // Show the modal
  modal.style.display = 'block';
}
 function showImag() {
  var modal = document.getElementById('myModal');
  var modalImage = document.getElementById('modalImage');

  // Set the image source to the desired image
  modalImage.src = 'img/nt.jpg'; // Replace with your image URL

  // Show the modal
  modal.style.display = 'block';
}

// Function to close the modal
function closeImage() {
  var modal = document.getElementById('myModal');
  
  // Hide the modal
  modal.style.display = 'none';}
