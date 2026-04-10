import { Howl } from 'howler';

// Simple sound manager using Howler
// We'll use some standard UI sound URLs or synthesized sounds if needed.
// For now, let's use some reliable public URLs for educational sounds.

class SoundManager {
  private correctSound: Howl;
  private wrongSound: Howl;
  private completeSound: Howl;
  private clickSound: Howl;

  constructor() {
    this.correctSound = new Howl({
      src: ['https://assets.mixkit.co/active_storage/sfx/2000/2000-preview.mp3'], // Success chime
      volume: 0.5
    });
    this.wrongSound = new Howl({
      src: ['https://assets.mixkit.co/active_storage/sfx/2003/2003-preview.mp3'], // Error/Buzz
      volume: 0.4
    });
    this.completeSound = new Howl({
      src: ['https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3'], // Celebration
      volume: 0.6
    });
    this.clickSound = new Howl({
      src: ['https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3'], // Click
      volume: 0.3
    });
  }

  playCorrect() {
    this.correctSound.play();
  }

  playWrong() {
    this.wrongSound.play();
  }

  playComplete() {
    this.completeSound.play();
  }

  playClick() {
    this.clickSound.play();
  }
}

export const soundManager = new SoundManager();
