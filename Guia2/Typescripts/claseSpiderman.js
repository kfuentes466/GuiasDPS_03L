var Spiderman = /** @class */ (function () {
    function Spiderman() {
        this.nombre = "Peter Parker";
        this.poderes = ["trepar", "fuerza", "agilidad", "telas de araña"];
    }
    Spiderman.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Spiderman.prototype.setPoderes = function (poderes) {
        this.poderes = poderes;
    };
    Spiderman.prototype.getNombre = function () {
        return this.nombre;
    };
    Spiderman.prototype.getPoderes = function () {
        return this.poderes;
    };
    return Spiderman;
}());
var mySpiderman = new Spiderman();
console.log(mySpiderman);
