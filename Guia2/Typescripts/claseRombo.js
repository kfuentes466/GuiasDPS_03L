var Rombo = /** @class */ (function () {
    function Rombo() {
        this.diagonalVertical = 2.5;
        this.diagonalHorizontal = 3.5;
    }
    Rombo.prototype.setDiagonalVertical = function (diagonalVertical) {
        this.diagonalVertical = diagonalVertical;
    };
    Rombo.prototype.setDiagonalHorizontal = function (diagonalHorizontal) {
        this.diagonalHorizontal = diagonalHorizontal;
    };
    Rombo.prototype.myRomboArea = function () {
        return ("El area del rombo es : " + this.diagonalVertical * this.diagonalHorizontal);
    };
    return Rombo;
}());
var myRombo = new Rombo();
myRombo.setDiagonalVertical(5.2);
myRombo.setDiagonalHorizontal(4.2);
console.log(myRombo);
console.log(myRombo.myRomboArea());
