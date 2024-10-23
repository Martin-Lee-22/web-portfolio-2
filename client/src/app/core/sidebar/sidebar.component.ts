import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HoverDirective } from '../../shared/directives/sounds/hover/hover.directive';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'sidebar',
  standalone: true,
  imports: [HoverDirective, TitleCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css', '../../animations.css'],
})
export class SidebarComponent {
  links = ['home', 'projects', 'about', 'contact'];
  hoverSound = '/sounds/hover_1.mp3';
  @Input() pageIndex: number = 0
  @Output() pageIndexChange = new EventEmitter<number>()

  updatePageIndex(index: number):void{
    this.pageIndex = index
    this.pageIndexChange.emit(this.pageIndex)
  }
}
