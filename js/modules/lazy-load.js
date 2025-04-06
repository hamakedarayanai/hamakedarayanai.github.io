export class LazyLoader {
    constructor() {
      this.media = [].slice.call(document.querySelectorAll('[loading="lazy"]'));
    }
  
    init() {
      if ('IntersectionObserver' in window) {
        this.setupObserver();
      } else {
        this.loadAllMedia();
      }
    }
  
    setupObserver() {
      const observer = new IntersectionObserver(this.handleIntersection.bind(this), {
        rootMargin: config.lazyLoadRootMargin,
        threshold: 0.01
      });
  
      this.media.forEach(media => {
        observer.observe(media);
      });
    }
  
    handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadMedia(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }
  
    loadMedia(element) {
      // ... lazy loading logic
    }
  }