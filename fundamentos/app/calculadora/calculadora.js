var num1 = 0;
var num2 = 0;
var opera;

// eslint-disable-next-line no-unused-vars
function pulsarNumero(numero) {
  if (num1 == 0 && num1 !== "0.") {
    num1 = numero;
  } else {
    num1 += numero;
  }
  refrescar();
}

// eslint-disable-next-line no-unused-vars
function pulsarComa() {
  if (num1 == 0) {
    num1 = "0.";
  } else if (num1.indexOf(".") == -1) {
    num1 += ".";
  }

  refrescar();
}

// eslint-disable-next-line no-unused-vars
function pulsarC() {
  num1 = 0;
  num2 = 0;
  refrescar();
}

// eslint-disable-next-line no-unused-vars
function operar(valor) {
  if (num1 == 0) {
    num1 = parseFloat(document.getElementById("valor_numero").value);
  }

  num2 = parseFloat(num1);
  num1 = 0;
  opera = valor;
}

// eslint-disable-next-line no-unused-vars
function pulsarIgual() {
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

function refrescar() {
  document.getElementById("valor_numero").value = num1;
}
