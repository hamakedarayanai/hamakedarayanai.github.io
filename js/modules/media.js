export class MediaPlayer {
    constructor() {
      this.players = [].slice.call(document.querySelectorAll('audio, video'));
      this.mediaElements = new Set();
    }
  
    init() {
      this.setupPlayers();
    }
  
    setupPlayers() {
      this.players.forEach(player => {
        const errorElement = player.nextElementSibling?.querySelector('.form-error');
        
        player.addEventListener('error', () => {
          this.handleError(player, errorElement);
        });
  
        player.addEventListener('playing', () => {
          if (errorElement) errorElement.style.display = 'none';
        });
      });
    }
  
    handleError(player, errorElement) {
      // ... error handling logic
    }
  }