import { NavManager } from '../modules/navbar.js';
import { FormHandler } from '../modules/forms.js';
import { MediaPlayer } from '../modules/media.js';
import { LazyLoader } from '../modules/lazy-load.js';
import { throttle } from '../modules/utilities.js';
import { config } from './config.js';

export class Website {
  constructor() {
    this.modules = {
      nav: new NavManager(),
      forms: new FormHandler(),
      media: new MediaPlayer(),
      lazyLoad: new LazyLoader()
    };
    
    this.init();
  }

  init() {
    try {
      // Initialize all modules
      Object.values(this.modules).forEach(module => {
        if (typeof module.init === 'function') {
          module.init();
        }
      });
      
      this.setupEventListeners();
    } catch (error) {
      console.error('Website initialization failed:', error);
      // Optionally show user-friendly error message
    }
  }

  setupEventListeners() {
    // Properly structured event listeners with throttle and options
    window.addEventListener(
      'scroll',
      throttle(this.handleScroll.bind(this), config.throttleDelay),
      { passive: true }
    );
    
    window.addEventListener('load', this.handleWindowLoad.bind(this));
    document.addEventListener(
      'visibilitychange',
      this.handleVisibilityChange.bind(this)
    );
  }

  handleScroll() {
    // Delegate scroll handling to appropriate modules
    this.modules.nav.handleScroll();
    // Add other scroll-related handlers as needed
  }

  handleWindowLoad() {
    // Perform actions needed after full page load
    console.log('Website fully loaded');
    // Could trigger analytics, lazy loading, etc.
  }

  handleVisibilityChange() {
    // Handle page visibility changes (tab switching)
    if (document.visibilityState === 'visible') {
      console.log('Page is visible');
      // Resume animations, video playback, etc.
    } else {
      console.log('Page is hidden');
      // Pause non-essential activities
    }
  }
}