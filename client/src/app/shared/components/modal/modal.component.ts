import { Component, inject, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { ModalService } from './modal.service';
import { modals } from '../../../data/enums';
import { ProjectModalComponent } from './components/project-modal/project-modal.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [ProjectModalComponent],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  modalService = inject(ModalService)
  modalEnums = modals
  @ViewChild('modalRef') modalRef!: ElementRef

  constructor() {}

/**
 * Handles the click event outside the modal dialog.
 * Closes the modal if the click target is the dialog element.
 * This works due to changing the padding of the dialog to 0.
 */
  clickOutside(event: MouseEvent) {
    if(event.target && event.target === this.modalRef.nativeElement) this.modalService.closeModal()
  }
}
