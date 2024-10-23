import { Directive, Input, HostListener, inject } from '@angular/core';
import { SoundService } from '../sound.service';

@Directive({
  selector: '[appSoundAnimation]',
  standalone: true
})
export class AnimationDirective {
  @Input() animationStartSound: string = '';
  @Input() animationEndSound: string = '';
  soundService: SoundService = inject(SoundService);

  constructor() {}

  @HostListener('animationstart') onAnimationStart() {
    let volume = 1
    this.soundService.playSound(this.animationStartSound, volume);
  }

  @HostListener('animationEnd') onAnimationEnd() {
    let volume = 1
    this.soundService.playSound(this.animationEndSound, volume);
  }
}
