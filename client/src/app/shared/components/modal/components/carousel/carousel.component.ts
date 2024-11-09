import { Component, Input, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';
import { images } from '../../../../../types/projects';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {
  @Input() images: images[] = []
  index: number = 0

  @ViewChild('carouselImageContainer') carouselImageContainer!: ElementRef
  imageWidth: number = 0

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.imageWidth = this.carouselImageContainer.nativeElement.clientWidth
    }, 100)
  }

  /**
   * Changes the index of the carousel component by the given value.
   * If the index is at the end of the array and the value is greater than 0, it loops back to the beginning.
   * If the index is at the start of the array and the value is less than 0, it loops back to the end.
   * @param value The value to change the index by.
   */
  changeIndex(value: number){    
    if(this.index === this.images.length - 1 && value > 0){
      this.index = 0
      return
    }
    if(this.index === 0 && value < 0){
      this.index = this.images.length - 1
      return
    }
    this.index = this.index + value
  }

  onKeyDown(event: KeyboardEvent){
    if(event.key === 'ArrowRight') this.changeIndex(1)
    if(event.key === 'ArrowLeft') this.changeIndex(-1)
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
      this.onKeyDown(event)
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.imageWidth = this.carouselImageContainer.nativeElement.clientWidth
  }
}
