import { Injectable } from '@angular/core';
import { modals } from '../../../data/enums';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  data: any = {}
  type: string = ''
  isModalOpen: boolean = false

  constructor() { }

  setIsModalOpen(value: boolean){
    this.isModalOpen = value
  }

  getIsModalOpen(){
    return this.isModalOpen
  }

  setData(data:{}){
    this.data = data
  }

  getData(){
    return this.data
  }

  getType(){
    return this.type
  }

  setType(type: modals | ''){
    this.type = type
  }

  closeModal(){
    this.data = {}
    this.isModalOpen = false
  }

  openModal(data: any) {
    this.data = data  
    this.isModalOpen = true    
  }
}
