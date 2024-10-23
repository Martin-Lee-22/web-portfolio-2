import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  contactService: ContactService = inject(ContactService)

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  })
  
  onSubmit(e: Event){
    if(this.contactForm.valid){

      let SERVICE_ID = 'service_emn2qqh'
      let TEMPLATE_ID = 'template_44uahm8'
      let PUBLIC_KEY = 'ngidyGCIxo9hsWK7I'
      
      this.contactService.setIsLoading(true)

      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          this.contactService.setIsSuccess(true)
          this.contactService.setIsSubmitted(true)
          this.contactForm.reset()
        },
        (error) => {
          this.contactService.setIsSuccess(false)
          this.contactService.setIsSubmitted(true)
        },
      );
    }
    this.contactService.setIsLoading(false)
  }

/**
 * Check if the specified form control value is invalid based on the form's state.
 * @param value - The name of the form control to check.
 * @returns true if the form control is invalid, false otherwise.
 */
  isValid(value: string): boolean{
    if(this.contactForm.get(value)?.invalid && (this.contactForm.get(value)?.dirty || this.contactForm.get(value)?.touched || this.contactService.getIsSubmitted())){
      return true;
    }
    return false;
  }
}
