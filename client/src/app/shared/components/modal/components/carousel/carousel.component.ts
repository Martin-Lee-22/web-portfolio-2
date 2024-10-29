import { Component, Input, ViewChild, ElementRef, HostListener } from '@angular/core';
import { images } from '../../../../../types/projects';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  @Input() images: images[] = []
  index: number = 0

  @ViewChild('carouselImageContainer') carouselImageContainer!: ElementRef


  /**
   * Changes the index of the carousel to the index + value and scroll the carouselImage container.
   * If the new index is out of bounds, it will loop/scroll to the other end.
   * @param value The amount to change the index by.
   */
  changeIndex(value: number){
    let imageWidth = this.carouselImageContainer.nativeElement.clientWidth * value
    
    if(this.index === this.images.length - 1 && value > 0){
      imageWidth = -imageWidth * (this.images.length - 1);
      this.carouselImageContainer.nativeElement.scrollLeft += imageWidth;
      this.index = 0
      return
    }

    if(this.index === 0 && value < 0){
      imageWidth = -imageWidth * (this.images.length - 1);
      this.carouselImageContainer.nativeElement.scrollLeft += imageWidth;
      this.index = this.images.length - 1
      return
    }

    this.carouselImageContainer.nativeElement.scrollLeft += imageWidth;
    this.index = this.index + value
  }

  onKeyDown(event: KeyboardEvent){
    if(event.key === 'ArrowRight') this.changeIndex(1); console.log('right arrow pressed')
    if(event.key === 'ArrowLeft') this.changeIndex(-1)
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
      this.onKeyDown(event)
  }
}
