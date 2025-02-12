document.addEventListener('DOMContentLoaded', function () {
  // WhatsApp Form Handling
  const whatsappForm = document.getElementById('whatsappForm');
  if (whatsappForm) {
    whatsappForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const phoneInput = document.getElementById('phone');
      const messageInput = document.getElementById('message');

      const phone = phoneInput.value.trim();
      const message = messageInput.value.trim();

      // Remove existing error message if present
      const existingError = phoneInput.parentNode.querySelector('.invalid-feedback');
      if (existingError) existingError.remove();

      if (!isValidPhoneNumber(phone)) {
        phoneInput.classList.add("is-invalid");

        // Create error message
        const errorElement = document.createElement('div');
        errorElement.className = 'invalid-feedback';
        errorElement.textContent = 'Please enter a valid phone number (including country code).';
        phoneInput.parentNode.insertBefore(errorElement, phoneInput.nextSibling);
        return;
      } else {
        phoneInput.classList.remove("is-invalid");
      }

      // Build WhatsApp URL
      let whatsappURL = `https://wa.me/${phone}`;
      if (message) {
        whatsappURL += `?text=${encodeURIComponent(message)}`;
      }

      // Open WhatsApp chat in new tab
      window.open(whatsappURL, '_blank');
    });
  }

  // Validate phone number using libphonenumber-js (assuming full international format)
  function isValidPhoneNumber(phoneNumber) {
    try {
      const parsedNumber = libphonenumber.parsePhoneNumber(phoneNumber);
      return parsedNumber.isValid();
    } catch (error) {
      return false;
    }
  }

  // Current Year in Footer
  const currentYearSpan = document.getElementById("currentYear");
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});