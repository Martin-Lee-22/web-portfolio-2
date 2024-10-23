import { Component, inject } from '@angular/core';
import { FormComponent } from "./components/form/form.component";
import {pageTransition} from "../../../animations";
import { ResponseComponent } from "./components/response/response.component";
import { ContactService } from './contact.service';
import { LoadingComponent } from '../../../shared/components/loading/loading.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormComponent, ResponseComponent, LoadingComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css', '../../../animations.css'],
  animations: [pageTransition]
})
export class ContactComponent {
  contactService = inject(ContactService);
}
