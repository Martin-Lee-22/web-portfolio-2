import { Component, Input, inject } from '@angular/core';
import { Project } from '../../../types/projects';
import { TruncatePipe } from '../../pipes/truncate/truncate.pipe';
import { ClickDirective } from '../../directives/sounds/click/click.directive';
import { ModalService } from '../modal/modal.service';
import { NgOptimizedImage } from '@angular/common';
import { TitleCasePipe } from '@angular/common';
import { tools } from '../../../data/tools';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TruncatePipe, ClickDirective, NgOptimizedImage, TitleCasePipe],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css', '../../../animations.css']
})
export class CardComponent {
  @Input() data: Project = {} as Project
  isMouseEntered = false
  toolsList = tools
  modalService = inject(ModalService)
}
