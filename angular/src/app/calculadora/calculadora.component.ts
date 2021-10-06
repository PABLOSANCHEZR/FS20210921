import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent implements OnInit {


  private num1 = 0;
  private num2 = 0;
  private opera = "+";



  constructor() {
    this.inicia();
  }

function pulsarNumero(numero: number | string) {
  if (num1 == 0 && num1 !== "0.") {
    num1 = numero;
  } else {
    num1 += numero;
  }
  refrescar();
}

// eslint-disable-next-line no-unused-vars
function pulsarComa() :void {
  if (num1 == 0) {
    num1 = "0.";
  } else if (num1.indexOf(".") == -1) {
    num1 += ".";
  }

  refrescar();
}

// eslint-disable-next-line no-unused-vars
function pulsarC() :void {
  num1 = 0;
  num2 = 0;
  refrescar();
}

// eslint-disable-next-line no-unused-vars
function operar(valor: string):void {
  if (num1 == 0) {
    num1 = parseFloat(document.getElementById("valor_numero").value);
  }

  num2 = parseFloat(num1);
  num1 = 0;
  opera = valor;
}

// eslint-disable-next-line no-unused-vars
function pulsarIgual():void {
  num1 = parseFloat(num1);

  switch (opera) {
    case 1:
      num1 += num2;
      break;

    case 2:
      num1 = num2 - num1;
      break;
    case 3:
      num1 *= num2;
      break;
    case 4:
      num1 = num2 / num1;
      break;
  }

  refrescar();
  num2 = parseFloat(num1);
  num1 = 0;
}

function refrescar():void {
  document.getElementById("valor_numero").value = num1;
}

inicia(): void {
  this.num1 = 0;
  this.opera = '+';
  this.num2 = '0';
}
