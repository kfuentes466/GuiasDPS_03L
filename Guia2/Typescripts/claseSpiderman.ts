class Spiderman{
    nombre:string;
    poderes:Array<String>;

    constructor(){
        this.nombre = "Peter Parker";
        this.poderes = ["trepar", "fuerza", "agilidad", "telas de araña"];
    }

    setNombre(nombre:string){
        this.nombre = nombre;
    }

    setPoderes(poderes:Array<String>){
        this.poderes = poderes;
    }

    getNombre(){
        return this.nombre;
    }

    getPoderes(){
        return this.poderes;
    }
}

var mySpiderman = new Spiderman();
console.log(mySpiderman);
