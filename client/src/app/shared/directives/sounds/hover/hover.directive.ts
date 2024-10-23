import { Directive, HostListener, inject, Input } from '@angular/core';
import { SoundService } from '../sound.service';

@Directive({
  selector: '[hoverSound]',
  standalone: true
})
export class HoverDirective {
  @Input() hoverSound: string = '';
  soundService: SoundService = inject(SoundService);

  constructor() {}

  @HostListener('mouseenter') onMouseEnter() {
    const volume = 0.5
    this.soundService.playSound(this.hoverSound, volume);
  }
}
