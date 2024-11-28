import { Component, inject, OnDestroy } from '@angular/core';
import { CardComponent } from '../../../shared/components/card/card.component';
import {projects} from '../../../data/projects';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { modals } from '../../../data/enums';
import { pageTransition } from '../../../animations';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../../../animations.css'],
  animations: [pageTransition]
})
export class ProjectsComponent implements OnDestroy {
  projects = projects
  modalService = inject(ModalService)
  constructor() {
    this.modalService.setType(modals.Project)
  }

  ngOnDestroy(): void {
    this.modalService.setType('')
    this.modalService.closeModal()
  }
}
