import { Component, inject } from '@angular/core';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-response',
  standalone: true,
  imports: [],
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css', '../../../../../animations.css'],
})
export class ResponseComponent {
  contactService: ContactService = inject(ContactService);
}
