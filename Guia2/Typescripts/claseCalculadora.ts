class Calculadora{
    numero1:number;
    numero2:number;

    constructor(){
        this.numero1 = 2;
        this.numero2 = 1;
    }

    setNumero1(numero1:number){
        this.numero1 = numero1;
    }

    getNumero1(){
        return this.numero1;
    }

    setNumero2(numero2:number){
        this.numero2 = numero2;
    }

    getNumero2(){
        return this.numero2;
    }

    operacionSuma(){
        let resultado:number;
        resultado = this.numero1 + this.numero2;
        return ("La suma es de : " + resultado);        
    }

    operacionResta(){
        let resultado:number;
        resultado = this.numero1 - this.numero2;
        return ("La resta es de : " + resultado);
    }

    operaionMultiplicacion(){
        let resultado:number;
        resultado = this.numero1*this.numero2;
        return ("El resultado de la multiplicación es : "+resultado);
    }

    operacionDivision(){
        let resultado:number;
        if(this.numero2 == 0){
            return ("No se puede dividir entre 0!")
        }else{
            resultado = this.numero1/this.numero2;
            return ("La divison da un resultado de : "+resultado);
        }
    }
}

var myCalculadora = new Calculadora()
myCalculadora.setNumero1(8);
myCalculadora.setNumero2(0);
console.log(myCalculadora);
console.log(myCalculadora.operacionSuma());
console.log(myCalculadora.operacionResta());
console.log(myCalculadora.operaionMultiplicacion());
console.log(myCalculadora.operacionDivision());