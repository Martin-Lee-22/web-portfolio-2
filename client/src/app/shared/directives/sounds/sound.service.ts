import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private isMuted: boolean = false

  getIsMuted(): boolean{
    return this.isMuted
  }

  setIsMuted(value: boolean): void{
    this.isMuted = value
  }

  /**
   * Play a sound at the given src path with the given volume if it is not muted.
   * @param src - The URL of the sound to play.
   * @param volume - A number between 0 and 1 representing the volume of the sound.
   */
  playSound(src: string, volume: number){
    console.log(`volume: ${volume}`)
      if(!this.isMuted){
        let audio = new Audio();
        audio.volume = volume;
        audio.src = src;
        audio.load();
        try{
          audio.play();
        }
        catch(e){
          console.log('Cannot play sound effect due to error: ' + e)
        }
    }
}
}
