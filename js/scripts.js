document.addEventListener('DOMContentLoaded', function() {
  // WhatsApp Form Handling
  const whatsappForm = document.getElementById('whatsappForm');
  if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const phoneInput = document.getElementById('phone');
      const messageInput = document.getElementById('message');

      const phone = phoneInput.value.trim();
      const message = messageInput.value.trim();

      if (!isValidPhoneNumber(phone)) {
        phoneInput.classList.add("is-invalid");
        return;
      } else {
        phoneInput.classList.remove("is-invalid");
      }

      let whatsappURL = `https://wa.me/${phone}`;
      if (message) {
        whatsappURL += `?text=${encodeURIComponent(message)}`;
      }
      window.open(whatsappURL, '_blank');
    });
  }

  function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\+?[1-9]\d{7,14}$/; // Customize this regex!
    return phoneRegex.test(phoneNumber);
  }


  // Current Year in Footer
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});
