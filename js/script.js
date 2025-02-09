document.addEventListener("DOMContentLoaded", function() {
  // Get sidebar, close button, and show button elements
  const sidebar = document.getElementById("sidebar");
  const closebtn = document.getElementById("closebtn");
  const showbtn = document.getElementById("showbtn");

  // Show sidebar on click or touch
  function openSidebar(event) {
      event.preventDefault(); // Prevent any default behavior
      sidebar.style.width = "250px";
      event.stopPropagation();
  }

  showbtn.addEventListener("click", openSidebar);
  showbtn.addEventListener("touchstart", openSidebar);

  // Hide sidebar on click or touch
  function closeSidebar(event) {
      event.preventDefault();
      sidebar.style.width = "0";
      event.stopPropagation();
  }

  closebtn.addEventListener("click", closeSidebar);
  closebtn.addEventListener("touchstart", closeSidebar);

  // Close sidebar when clicking outside of it
  document.body.addEventListener("click", function(event) {
      if (!sidebar.contains(event.target) && event.target !== showbtn) {
          sidebar.style.width = "0";
      }
  });

  // Prevent sidebar from closing when clicking inside it
  sidebar.addEventListener("click", function(event) {
      event.stopPropagation();
  });

  // Keyboard accessibility for sidebar
  document.addEventListener("keydown", function(event) {
      if (event.key === "Escape") {
          sidebar.style.width = "0"; // Close sidebar on "Esc"
      }
      
      if (event.key === "Tab" && sidebar.style.width === "250px") {
          event.preventDefault(); // Prevent default tab behavior
          const links = sidebar.getElementsByTagName("a");
          let index = Array.prototype.indexOf.call(links, document.activeElement);
          index = event.shiftKey ? index - 1 : index + 1;
          index = (index + links.length) % links.length;
          links[index].focus();
      }
  });

  /* WhatsApp Chat Functionality */
  function openWhatsAppChat() {
      let phoneNumber = document.getElementById("phone").value.trim();
      let message = document.getElementById("message").value.trim();

      // Ensure phone number is in international format
      phoneNumber = phoneNumber.replace(/\D/g, '');

      if (!phoneNumber) {
          alert("Please enter a valid phone number.");
          return false;
      }

      let url = "https://api.whatsapp.com/send?phone=" + phoneNumber;
      if (message) {
          url += "&text=" + encodeURIComponent(message);
      }

      window.open(url, '_blank');
      return false; // Prevent form submission
  }
});
