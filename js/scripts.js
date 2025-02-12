function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    document.querySelector('.theme-toggle').textContent = document.body.classList.contains('dark-theme') ? '🌙' : '☀️';
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const whatsappForm = document.getElementById('whatsappForm');
    if (whatsappForm) {
      whatsappForm.addEventListener('submit', function(event) {
        event.preventDefault();
        let phone = document.getElementById('phone');
        let message = document.getElementById('message').value.trim();
        if (!phone.checkValidity()) {
          phone.classList.add("is-invalid");
          return;
        }
        let whatsappURL = `https://wa.me/${phone.value.trim()}`;
        if (message) {
          whatsappURL += `?text=${encodeURIComponent(message)}`;
        }
        window.open(whatsappURL, '_blank');
      });
    }
  });
  