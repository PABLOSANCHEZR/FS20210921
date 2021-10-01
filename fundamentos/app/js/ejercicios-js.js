//ejercicio1

// eslint-disable-next-line no-unused-vars
function aleatorio(minimo,maximo){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
    
  }

  // ejercicio2

// eslint-disable-next-line no-unused-vars

new class adivinarNumero()
function adivinarNumero (){

    var numero = parseInt(prompt("Ingresa un número (del 1 al 100):"));
    var numeroAleatorio = Math.floor(Math.random() * 100);
    
    
    if (numeroAleatorio === numero) {
        console.log("Adivinaste!");
    } else {

        if(numeroAleatorio < numero){
            console.log("el numero que has puesto es menor, en concreto " + numeroAleatorio);
        }else{
            console.log("el numero es mayor, en concreto " + numeroAleatorio);
        }
        console.log("Perdiste! El número es " + numeroAleatorio);
    }

}

//ejercicio3

// eslint-disable-next-line no-unused-vars
function devolverArray (tamaño, numero){
    if (typeof longitud !== "number") 
    return "ERROR de longitud";
    let array = new Array (tamaño);

    for(let step = 0; step < tamaño; step++){
        array[step] = numero;
        
    }

    return array;
}



// ejercicio 4

function primo(num){
    if(num == 0 || num == 1) 
    return false;
    for (let i = 2; i < num;i++){
        if(num % 1 == 0)
        return false;
    }

    return true;
}

// eslint-disable-next-line no-unused-vars
function numerosPrimos (a,b){
    let arrayPrimos = new Array();
    for(let i = a;i < b; i++){
        if(primo(i))
        arrayPrimos.push(i);
    }

    return arrayPrimos;
}


//ejercicio5

// eslint-disable-next-line no-unused-vars
function dni(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduce tu número de DNI (sin la letra)");
var letra = prompt("Introduce la letra de tu DNI (en mayúsculas)");
letra = letra.toUpperCase();

if(numero < 0 || numero > 99999999) {
  alert("El número proporcionado no es válido");
  console.log("El numero no es correcto, numero introducico: " +numero);
}
else {
  var letraCalculada = letras[numero % 23];
  if(letraCalculada != letra) {
    alert("La letra o el número proporcionados no son correctos");
    console.log("El numero no es correcto, numero introducico: " +numero);

  }
  else {
    alert("El número de DNI y su letra son correctos");
    console.log("El numero es correcto, numero introducico: " +numero,+letra);


  }
}
}
//ejercicio6

function quitarEspacios (cadena){
    let cad = cadena.split(" ").join("");
    return cad;

}

function invertir (cadena){
    let cadenaInvertir = "";
    for (let i = cadena.length-1;i>=0;i--){
        cadenaInvertir += cadena.charAt(i);
    }
    return cadenaInvertir;
}

// eslint-disable-next-line no-unused-vars
function palindromo (cadena){
    let cad = quitarEspacios(cadena).toUpperCase();
    return (cad === invertir(cad));
    
}

