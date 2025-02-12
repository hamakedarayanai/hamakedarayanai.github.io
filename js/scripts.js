document.addEventListener("DOMContentLoaded", function () {
  // Set current year in footer
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70, // Adjust for navbar height
          behavior: "smooth",
        });
      }
    });
  });

  // Optional: Dark mode toggle (if needed in the future)
  const toggleDarkMode = document.getElementById("darkModeToggle");
  if (toggleDarkMode) {
    toggleDarkMode.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme");
      localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });

    // Load saved theme preference
    if (localStorage.getItem("theme") === "light") {
      document.body.classList.remove("dark-theme");
    }
  }
});