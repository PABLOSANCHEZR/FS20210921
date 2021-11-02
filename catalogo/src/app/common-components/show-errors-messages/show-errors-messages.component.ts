import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'errors-messages',
  templateUrl: './show-errors-messages.component.html',
  styleUrls: ['./show-errors-messages.component.scss']
})
export class ShowErrorsMessagesComponent implements OnChanges {
  //  max = 'El máximo tiene que ser ';
  //  min = 'El minimo tiene que ser';
  //  maxlength = 'El maximo de caracteres es';
  //  minlength='El minimo de caracteres es';
  //  email = 'No es un correo válido';
  //  required = 'Es obligatorio';

@Input() message: any;
maxlength='';
minlength='';
max= 0;
min=0;
required = true;
hidden = false;
mensaje='';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    if (!this.message) {
      this.hidden = true;
      return;
    }
    this.lista_messages;
  }

lista_messages(){
  let m ='';
  if(this.message!== null){
   for(let msg of Object.keys(this.message)){
      switch(msg){
        case 'max':
          m += `El maximo es ${this.message[msg].max}`;
          break;
        case 'min':
          m+=  `El minimo es ${this.message[msg].min}`;
          break;
        case 'maxlength':
          m +=  `El maximo de caracteres es ${this.message[msg].requiredLength}`;
          break;
        case 'minlength':
          m +=  `El minimo de caracteres es ${this.message[msg].requiredLength}`;
          break;
        case 'required':
          m += `Es obligatorio`;
          break;
        case 'email':
          m += 'No es un correo valido';
          break;
        case 'lowercase':
          m += 'Tiene que estar en minúsculas';
          break;
        default:
          m = ''
      }
    }
    this.mensaje=m.trim();
    this.hidden = this.mensaje === '';
  }
  return m;
}
json() {
  return JSON.stringify(this.message);
}



}
