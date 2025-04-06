import { Website } from './core/website.js';

document.addEventListener('DOMContentLoaded', () => {
  try {
    new Website();
  } catch (error) {
    console.error('Failed to initialize website:', error);
    document.documentElement.classList.add('js-failed');
  }
});