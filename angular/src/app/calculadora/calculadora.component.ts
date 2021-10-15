import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  private num1 = 0;
  private num2 = 0;
  private opera = '+';

  constructor() {
    this.inicia();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  pulsarComa(): void {}
  pulsarNumero(numero: number) {}
  pulsarC(): void {}

  operar(valor: string): void {}

  pulsarIgual(): void {}

  refrescar(): void {}

  inicia(): void {
    this.num1 = 0;
    this.opera = '+';
    this.num2 = 0;
  }
}

/*pulsarNumero(numero: number) {
  if (this.num1 == 0) {
    this.num1 = numero;
  } else {
    this.num1 += numero;
  }
  refrescar();
}

// eslint-disable-next-line no-unused-vars
 pulsarComa() :void {
  if (this.num1 == 0) {
    this.num1 = "0.";
  } else if (this.num1.indexOf(".") == -1) {
    this.num1 += ".";
  }

  refrescar();
}

// eslint-disable-next-line no-unused-vars
function pulsarC() :void {
  this.num1 = 0;
  num2 = 0;
  refrescar();
}

// eslint-disable-next-line no-unused-vars
function operar(valor: string):void {
  if (this.num1 == 0) {
    this.num1 = parseFloat(document.getElementById("valor_numero").value);
  }

  num2 = parseFloat(this.num1);
  this.num1 = 0;
  opera = valor;
}

// eslint-disable-next-line no-unused-vars
function pulsarIgual():void {
  this.num1 = parseFloat(this.num1);

  switch (opera) {
    case 1:
      this.num1 += num2;
      break;

    case 2:
      this.num1 = num2 - this.num1;
      break;
    case 3:
      this.num1 *= num2;
      break;
    case 4:
      this.num1 = num2 / this.num1;
      break;
  }

  refrescar();
  num2 = parseFloat(this.num1);
  this.num1 = 0;
}

function refrescar():void {
  document.getElementById("valor_numero").value = this.num1;
}

inicia(): void {
  this.this.num1 = 0;
  this.opera = '+';
  this.num2 = '0';
}
*/
