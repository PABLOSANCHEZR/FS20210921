// eslint-disable-next-line no-unused-vars
function suma(a, b) {
    return a + b;
}
// var suma = function (a, b) {
//     return a + b;
// }
function divide(a, b) {
    return a / b;
}
/*
function kk() {
    a = 1
    b = 2
    // eslint-disable-next-line no-cond-assign
    if (a = b) {
        alert('sale')
    }
}
function suma(a, b) {
    return a - b;
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
divide = 5;
let fn = item => a + b;
fn = function (item) { return a + b; }
//fn = (a, b) => { ...; return rslt; }
fn(4)
calcula(a, b, (a, b) => a % b)
let rslt = opera('/')(2, 2);
calcula(a, b, suma)
calcula(a, b, function () { return a % b; })
if (suma(2, 2) == 0) {
    let calc = function () { return a % b; };
    calc(3, 5);
}
var kk = 0;
(function () {
    var k = 0;
    var $
    // ...
})()
function MiClase(elId, elNombre) {
    let v = this;
    this.id = elId;
    this.nombre = elNombre;
    this.muestraId = function () {
        let x = this;
        alert("El ID del objeto es " + v.id);
    }
    let privado = 0;
    this.prop = (value) => {
        if (arguments.length)
            privado = value;
        else
            return privado;
    }
    // this.ponNombre = function (nom) {
    //     this.nombre = nom.toUpperCase();
    // }
}
class LaClase {
    constructor(elId, elNombre) {
        this.id = elId;
        this.nombre = elNombre;
        this._privado = 0;
    }
    muestraId() {
        alert("El ID del objeto es " + this.id);
    }
    ponNombre(nom) {
        this.nombre = nom.toUpperCase();
    }
    get prop() { return this._privado; }
    set prop(value) {
        if (this.privado === value) return;
        this.privado = value;
    }
}
MiClase.prototype.ponNombre = function (nom) {
    this.nombre = nom.toUpperCase();
}
MiClase.prototype.cont = 0;
function Heredero() {
    // ...
}
Heredero.prototype = MiClase.prototype
var a = new MiClase("99", "Objeto de prueba");
// a.prototype = MiClase.prototype;
var b = new MiClase(1, "otro");
b.muestraId.bind(a);
b.muestraId()
// b.prototype = MiClase.prototype;
var c = new LaClase();
c.muestraId = 4;
let fn = c.muestraId;
fn.bind(c)
c.ponNombre();
let rslt;
a.prop(5)
c.prop = 5;
rslt = c.prop;
rslt = a.id
rslt = b.id
a.apellidos = 'algo'
rslt = a.apellidos
rslt = b.apellidos
delete a.nombre
rslt = a.nombre
rslt = b.nombre
b.muestraId = () => alert('Hora de tomar cafe')
a.muestraId = 4;
a.muestraId()
b.muestraId()
b.ponNombre = () => alert('algo')
b.prototype.ponNombre = 4
a.cont++;
c.cont++;
rslt = b.cont;
var a = new MiClase("99", "Objeto de prueba");
let obj = new Object() // {} []
MiClase.call(obj, "99", "Objeto de prueba");
obj.prototype = MiClase.prototype
var a = obj;
*/