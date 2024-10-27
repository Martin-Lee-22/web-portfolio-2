import { Component, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [],
  templateUrl: './avatar.component.html',
  styleUrl: './avatar.component.css'
})
export class AvatarComponent implements AfterViewInit{
  @ViewChild('avatarContainer') avatarContainer!: ElementRef<HTMLDivElement>;
  @ViewChild('leftEye') leftEye!: ElementRef<HTMLDivElement>;
  @ViewChild('rightEye') rightEye!: ElementRef<HTMLDivElement>;
  @ViewChild('anchor') anchor!: ElementRef<HTMLImageElement>;

  count: number = 0 // The amount of times the avatar was clicked by the user.
  maxCount: number = 3
  eyelidElements: Element[] = []

  size = {} as DOMRect
  sizeX = 0
  sizeY = 0

  ngAfterViewInit(): void {
    this.size = this.anchor.nativeElement.getBoundingClientRect();
    this.sizeX = this.size.left + this.size.width / 2
    this.sizeY = this.size.top + this.size.height / 2

    const elements = this.avatarContainer.nativeElement.getElementsByClassName('eyelids');
    this.eyelidElements = Array.from(elements);
  }

  incrementCount():void{
    if(this.count <= this.maxCount) this.count += 1
  }

  countAnimation():void{
    switch(this.count){
      case 1:
        this.eyelidElements.forEach((element) => {
          element.classList.add('blink')
        })
        break

      case 2:
        this.avatarContainer.nativeElement.classList.add('shake-head')
        break

      case 3:
        this.avatarContainer.nativeElement.classList.add('lower-head')
        this.eyelidElements.forEach((element) => {
          element.classList.add('angry-eyes')
        })
        break
      default:
        break;
    }
  }

/**
 * Calculates the angle in degrees between two points (cx, cy) and (ex, ey).
 * The angle is measured from the horizontal axis to the line connecting the two points.
 *
 * @param cx - The x-coordinate of the first point.
 * @param cy - The y-coordinate of the first point.
 * @param ex - The x-coordinate of the second point.
 * @param ey - The y-coordinate of the second point.
 * @returns The angle in degrees.
 */
  angle(cx: number, cy: number, ex: number, ey: number) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg
  }

  /**
   * Listens for mousemove events and updates the rotation of the eyes based on the angle between the mouse and the center of the avatar.
   * @param event The MouseEvent that triggered this function.
   */
  @HostListener('document:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    const mouseX = event.clientX
    const mouseY = event.clientY
    const angleDeg = this.angle(mouseX, mouseY, this.sizeX, this.sizeY)
    this.leftEye.nativeElement.style.transform = `rotate(${angleDeg}deg)`
    this.rightEye.nativeElement.style.transform = `rotate(${angleDeg}deg)`
  }
}