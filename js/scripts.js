// Update the footer year dynamically
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});

// Navbar shrink effect on scroll
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shadow-lg");
  } else {
    navbar.classList.remove("shadow-lg");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    let target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// WhatsApp Chat Form Handler
document.addEventListener("DOMContentLoaded", function () {
  let whatsappForm = document.getElementById("whatsappForm");
  if (whatsappForm) {
    whatsappForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let phone = document.getElementById("phone").value.trim();
      let message = document.getElementById("message").value.trim();
      
      // Validate phone number format (basic check)
      let phonePattern = /^\+?[1-9]\d{7,14}$/;
      if (!phonePattern.test(phone)) {
        document.getElementById("phone").classList.add("is-invalid");
        return;
      } else {
        document.getElementById("phone").classList.remove("is-invalid");
      }

      // Construct WhatsApp link
      let whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phone)}`;
      if (message) {
        whatsappUrl += `&text=${encodeURIComponent(message)}`;
      }

      // Open WhatsApp chat
      window.open(whatsappUrl, "_blank");
    });
  }
});

// Lazy loading images
document.addEventListener("DOMContentLoaded", function () {
  let lazyImages = document.querySelectorAll("img[loading='lazy']");
  lazyImages.forEach(img => {
    img.addEventListener("load", function () {
      img.classList.add("fade-in");
    });
  });
});

// Fade-in animation class
document.head.insertAdjacentHTML("beforeend", `
  <style>
    .fade-in { animation: fadeIn 1s ease-in-out; }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-10px); }
      to { opacity: 1; transform: translateY(0); }
    }
  </style>
`);