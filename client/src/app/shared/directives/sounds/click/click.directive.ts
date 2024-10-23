import { Directive, inject, HostListener } from '@angular/core';
import { SoundService } from '../sound.service';

@Directive({
  selector: '[appClick]',
  standalone: true
})
export class ClickDirective {
  soundService: SoundService = inject(SoundService)
  constructor() { }

  @HostListener('click') onClick() {
    const volume = 0.5
    this.soundService.playSound('/sounds/click.mp3', volume)
  }

}
