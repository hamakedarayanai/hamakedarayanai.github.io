export class FormHandler {
    constructor() {
      this.forms = {
        whatsapp: document.getElementById('whatsappForm')
      };
      this.submissions = new WeakMap();
    }
  
    init() {
      if (this.forms.whatsapp) {
        this.setupWhatsAppForm();
      }
    }
  
    setupWhatsAppForm() {
      const form = this.forms.whatsapp;
      form.addEventListener('submit', this.handleSubmit.bind(this));
      
      // Setup validation
      const phoneInput = form.querySelector('#phone');
      phoneInput.addEventListener('blur', () => {
        phoneInput.classList.toggle(
          'is-invalid',
          !config.phoneRegex.test(phoneInput.value.trim())
        );
      });
    }
  
    handleSubmit(e) {
      // ... form submission logic
    }
  }