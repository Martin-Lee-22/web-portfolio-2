import { Component, inject } from '@angular/core';
import { SoundService } from '../../shared/directives/sounds/sound.service';

@Component({
  selector: 'app-mute',
  standalone: true,
  imports: [],
  templateUrl: './mute.component.html',
  styleUrl: './mute.component.css'
})
export class MuteComponent {
  soundService = inject(SoundService)
  isMuted: boolean = this.soundService.getIsMuted();

  toggleMute():void {
    this.soundService.setIsMuted(!this.isMuted)
    this.isMuted = !this.isMuted
  }
}
