(function() {
  "use strict";

  // -----------------------------
  // Sidebar Functionality
  // -----------------------------
  const sidebar = document.getElementById("sidebar");
  const closebtn = document.getElementById("closebtn");
  const showbtn = document.getElementById("showbtn");

  // Show sidebar when clicking the show button
  showbtn.addEventListener("click", function(event) {
    sidebar.style.width = "250px";
    event.stopPropagation(); // Prevent body click event from triggering
  });

  // Hide sidebar when clicking the close button
  closebtn.addEventListener("click", function(event) {
    sidebar.style.width = "0";
    event.stopPropagation();
  });

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

    // Handle Tab key navigation within the sidebar if it's open
    if (event.key === "Tab" && sidebar.style.width === "250px") {
      event.preventDefault(); // Prevent default tab behavior
      const links = sidebar.getElementsByTagName("a");
      let index = Array.prototype.indexOf.call(links, document.activeElement);

      // Move focus to the next or previous link based on Shift key state
      index = event.shiftKey ? index - 1 : index + 1;
      index = (index + links.length) % links.length; // Wrap-around using modulo
      links[index].focus();
    }
  });

  // -----------------------------
  // WhatsApp Chat Functionality
  // -----------------------------
  // Expose the function globally if needed (e.g., for an onclick attribute in HTML)
  window.openWhatsAppChat = function() {
    let phoneNumber = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();

    // Ensure phone number is in international format by stripping non-digit characters
    phoneNumber = phoneNumber.replace(/\D/g, '');

    if (!phoneNumber) {
      alert("Please enter a valid phone number.");
      return false;
    }

    // Construct the WhatsApp API URL with the phone number and optional message
    let url = "https://api.whatsapp.com/send?phone=" + phoneNumber;
    if (message) {
      url += "&text=" + encodeURIComponent(message);
    }

    // Open the WhatsApp chat in a new tab
    window.open(url, '_blank');
    return false; // Prevent form submission if this is triggered by a form
  };

})();
