var Calculadora = /** @class */ (function () {
    function Calculadora() {
        this.numero1 = 2;
        this.numero2 = 1;
    }
    Calculadora.prototype.setNumero1 = function (numero1) {
        this.numero1 = numero1;
    };
    Calculadora.prototype.getNumero1 = function () {
        return this.numero1;
    };
    Calculadora.prototype.setNumero2 = function (numero2) {
        this.numero2 = numero2;
    };
    Calculadora.prototype.getNumero2 = function () {
        return this.numero2;
    };
    Calculadora.prototype.operacionSuma = function () {
        var resultado;
        resultado = this.numero1 + this.numero2;
        return ("La suma es de : " + resultado);
    };
    Calculadora.prototype.operacionResta = function () {
        var resultado;
        resultado = this.numero1 - this.numero2;
        return ("La resta es de : " + resultado);
    };
    Calculadora.prototype.operaionMultiplicacion = function () {
        var resultado;
        resultado = this.numero1 * this.numero2;
        return ("El resultado de la multiplicación es : " + resultado);
    };
    Calculadora.prototype.operacionDivision = function () {
        var resultado;
        if (this.numero2 == 0) {
            return ("No se puede dividir entre 0!");
        }
        else {
            resultado = this.numero1 / this.numero2;
            return ("La divison da un resultado de : " + resultado);
        }
    };
    return Calculadora;
}());
var myCalculadora = new Calculadora();
myCalculadora.setNumero1(8);
myCalculadora.setNumero2(0);
console.log(myCalculadora);
console.log(myCalculadora.operacionSuma());
console.log(myCalculadora.operacionResta());
console.log(myCalculadora.operaionMultiplicacion());
console.log(myCalculadora.operacionDivision());
