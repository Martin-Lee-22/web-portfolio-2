import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { SoundService } from '../../../shared/directives/sounds/sound.service';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css',
})
export class IntroComponent {
  @Input() isIntroActive: boolean = false;
  @Output() isIntroActiveChange = new EventEmitter<boolean>();

  isAnimating = false;
  animationSound = '/sounds/radar.mp3';
  soundService: SoundService = inject(SoundService);

  /**
   * Starts the intro animation. The animation sets the `isAnimating` 
   * flag to true. After the animation is finished, the `isIntroActive` 
   * flag is toggled and an event is emitted; thus destroying this IntroComponent.
   */
  startIntro() {
    this.isAnimating = true

    // delays the radar sound effect for the animation
    let radarDelay = 630
    setTimeout(() => {
      this.soundService.playSound(this.animationSound, 0.25);
    }, radarDelay)

    // delays the end of the animation before showing the webpage content.
    let delay = 2500;
    setTimeout(() => {
      this.isIntroActive = !this.isIntroActive;
      this.isIntroActiveChange.emit(this.isIntroActive);
    }, delay)

  }
}
