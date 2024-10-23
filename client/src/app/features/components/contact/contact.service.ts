import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  isSubmitted: boolean = false;
  isSuccess: boolean = false;
  isLoading: boolean = false;

  constructor() {}

  getIsSuccess(): boolean {
    return this.isSuccess;
  }
  getIsSubmitted(): boolean {
    return this.isSubmitted;
  }
  getIsLoading(): boolean {
    return this.isLoading;
  }

  setIsSuccess(value: boolean) {
    this.isSuccess = value;
  }

  setIsSubmitted(value: boolean) {
    this.isSubmitted = value;
  }

  setIsLoading(value: boolean) {
    this.isLoading = value;
  }
}
