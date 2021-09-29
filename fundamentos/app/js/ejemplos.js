function suma(a, b) {
    return a + b;
}
function divide(a, b) {
    // debugger;
    return a / b;
}

function calcula(a, b, fn) {
    return fn(a, b)
}

function opera(operador) {
    switch (operador) {
        case '+': return suma;
        case '-': return function (a, b) { return a - b; }
        case '*': return function (a, b) { return a * b; }
        case '/': return divide;
        //default: return function() { return; }
    }
}

// eslint-disable-next-line no-unused-vars
function aleatorio(minimo,maximo){
    return Math.floor(Math.random() * ((maximo+1)-minimo)+minimo);
  }
// eslint-disable-next-line no-unused-vars
function random(){
    return Math.random();
}
// eslint-disable-next-line no-unused-vars
var num = Math.random();

console.log(`Resultado: ${opera('/')(2, 2)}`)
console.error('Esto es un error de ejemplo')