class Rombo{
    diagonalVertical: number;
    diagonalHorizontal: number;

    constructor(){
        this.diagonalVertical = 2.5;
        this.diagonalHorizontal = 3.5;
    }

    setDiagonalVertical(diagonalVertical:number){
        this.diagonalVertical = diagonalVertical;
    }

    setDiagonalHorizontal(diagonalHorizontal:number){
        this.diagonalHorizontal = diagonalHorizontal;
    }

    myRomboArea(){
        return ("El area del rombo es : " + this.diagonalVertical * this.diagonalHorizontal);
    }
}

var myRombo = new Rombo();
myRombo.setDiagonalVertical(5.2);
myRombo.setDiagonalHorizontal(4.2);
console.log(myRombo);
console.log(myRombo.myRomboArea());