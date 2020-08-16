class Empleado{
    nombre:string;
    salario:number;

    constructor(){
        this.nombre = "Julio Hernandez";
        this.salario = 500;
    }

    setNombre(nombre:string){
        this.nombre=nombre;
    }

    getNombre(){
        return this.nombre;
    }

    setSalario(salario:number){
        this.salario = salario;
    }

    getSalario(){
        return this.salario;
    }

    empleadoDescuentos(){
    let ISSS:number;
    let AFP:number;
    let renta:number;
    let salarioNeto:number;
        
    if(this.salario > 0 && this.salario <= 316.66) renta = 0;
    else if(this.salario >= 316.67 && this.salario < 469.04 ) renta = 0.10;
    else if(this.salario >= 469.05 && this.salario <761.90) renta = 0.10;
    else if(this.salario >= 761.91 && this.salario < 1904.68) renta = 0.20;
    else if(this.salario >= 1904.69) renta = 0.30;

    ISSS = 0.03;
    AFP = 0.15;
    salarioNeto = this.salario - ((this.salario*ISSS) + (this.salario*renta) + (this.salario*AFP));
    return ("El salario neto es de : " + salarioNeto);
    }
}

var myEmpleados = new Empleado();
myEmpleados.setNombre("Yolanda Perez");
myEmpleados.setSalario(645);
console.log(myEmpleados);
console.log(myEmpleados.empleadoDescuentos());