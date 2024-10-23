import { Component, Input } from '@angular/core';
import { Project } from '../../../../../types/projects';
import { CarouselComponent } from '../carousel/carousel.component';
import { ToolsComponent } from './components/tools/tools.component';
import { modalExit } from '../../../../../animations';

@Component({
  selector: 'app-project-modal',
  standalone: true,
  imports: [CarouselComponent, ToolsComponent],
  templateUrl: './project-modal.component.html',
  styleUrl: './project-modal.component.css',
})
export class ProjectModalComponent {
  @Input() modalData: Project = {} as Project
}
