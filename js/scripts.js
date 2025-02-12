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
      phoneInput.classList.remove("is-invalid");
      const errorElement = phoneInput.parentNode.querySelector('.invalid-feedback');
      if (errorElement) errorElement.style.display = 'none';

      if (!isValidPhoneNumber(phone)) {
        phoneInput.classList.add("is-invalid");
        errorElement.style.display = 'block';
        return;
      }

      // Build WhatsApp URL
      let whatsappURL = `https://wa.me/${phone.replace(/\D/g, '')}`;
      if (message) {
        whatsappURL += `?text=${encodeURIComponent(message)}`;
      }

      // Open WhatsApp chat in new tab
      window.open(whatsappURL, '_blank');
    });
  }

  // Validate phone number using libphonenumber-js
  function isValidPhoneNumber(phoneNumber) {
    try {
      const parsedNumber = libphonenumber.parsePhoneNumber(phoneNumber);
      return parsedNumber && parsedNumber.isValid();
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