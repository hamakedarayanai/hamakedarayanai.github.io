// Update the footer year dynamically
document.addEventListener("DOMContentLoaded", function () {
  const currentYearElem = document.getElementById("currentYear");
  if (currentYearElem) {
    currentYearElem.textContent = new Date().getFullYear();
  }
});

// Navbar shrink effect on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("shadow-lg");
    } else {
      navbar.classList.remove("shadow-lg");
    }
  }
}, { passive: true });

// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  const anchors = document.querySelectorAll('a[href^="#"]');
  anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});

// WhatsApp Chat Form Handler
document.addEventListener("DOMContentLoaded", function () {
  const whatsappForm = document.getElementById("whatsappForm");
  if (whatsappForm) {
    whatsappForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const phoneInput = document.getElementById("phone");
      const messageInput = document.getElementById("message");
      const phone = phoneInput ? phoneInput.value.trim() : "";
      const message = messageInput ? messageInput.value.trim() : "";
      
      const phonePattern = /^\+?[1-9]\d{7,14}$/;
      if (!phonePattern.test(phone)) {
        phoneInput.classList.add("is-invalid");
        return;
      } else {
        phoneInput.classList.remove("is-invalid");
      }
  
      let whatsappUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phone)}`;
      if (message) {
        whatsappUrl += `&text=${encodeURIComponent(message)}`;
      }
  
      window.open(whatsappUrl, "_blank");
    });
  }

  // Real-time phone validation feedback
  const phoneInput = document.getElementById("phone");
  if (phoneInput) {
    phoneInput.addEventListener("input", function () {
      const phonePattern = /^\+?[1-9]\d{7,14}$/;
      if (phonePattern.test(this.value.trim())) {
        this.classList.remove("is-invalid");
        this.classList.add("is-valid");
      } else {
        this.classList.remove("is-valid");
        this.classList.add("is-invalid");
      }
    });
  }
});

// Lazy loading images with fade-in effect
document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll("img[loading='lazy']");
  lazyImages.forEach(img => {
    img.addEventListener("load", function () {
      img.classList.add("fade-in");
    });
  });
});

// Inject fade-in animation styles into the document head
document.addEventListener("DOMContentLoaded", function () {
  const fadeInStyle = `
    <style>
      .fade-in { animation: fadeIn 1s ease-in-out; }
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    </style>
  `;
  document.head.insertAdjacentHTML("beforeend", fadeInStyle);
});

// Scroll-to-top button behavior
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.createElement("div");
  scrollToTopBtn.classList.add("scroll-to-top");
  scrollToTopBtn.innerHTML = "↑";
  document.body.appendChild(scrollToTopBtn);

  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add("show");
    } else {
      scrollToTopBtn.classList.remove("show");
    }
  }, { passive: true });

  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

// Highlight active navbar link on scroll
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 60;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
}, { passive: true });
