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
    event.stopPropagation();
  });

  // Hide sidebar when clicking the close button
  closebtn.addEventListener("click", function(event) {
    sidebar.style.width = "0";
    event.stopPropagation();
  });

  // Hide sidebar when clicking outside of it
  document.body.addEventListener("click", function(event) {
    if (!sidebar.contains(event.target) && event.target !== showbtn) {
      sidebar.style.width = "0";
    }
  });

  // Prevent sidebar from closing when clicking inside it
  sidebar.addEventListener("click", function(event) {
    event.stopPropagation();
  });

  // Keyboard accessibility for sidebar (close on Escape)
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
      sidebar.style.width = "0";
    }
  });

  // -----------------------------
  // WhatsApp Chat Functionality
  // -----------------------------
  // This function will be called when the form is submitted.
  // It retrieves the input values, builds the WhatsApp URL,
  // and opens the chat in a new tab.
  window.openWhatsAppChat = function() {
    // Retrieve and sanitize the phone number and message values from the form
    const phone = document.getElementById("phone").value.trim().replace(/\D/g, '');
    const message = document.getElementById("message").value.trim();
    
    // Check if the phone number is provided
    if (!phone) {
      alert("Please enter a valid phone number.");
      return false;
    }
    
    // Build the WhatsApp URL using WhatsApp's API
    let url = "https://wa.me/" + encodeURIComponent(phone);
    if (message) {
      url += "?text=" + encodeURIComponent(message);
    }
    
    // Open the URL in a new tab/window
    window.open(url, "_blank");
    
    // Prevent the form from submitting in the traditional way
    return false;
  };

})();
