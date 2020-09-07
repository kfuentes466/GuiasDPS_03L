import { Component } from '@angular/core';
import { Alumno } from './models/alumno';
import { from } from 'rxjs';
//import { runInThisContext } from 'vm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudAngular';
  //Arreglo del ipo alumno, que tiene 3 regstros almacenados
  alumnoArray: Alumno[] = [
    {id:1,name:"Alex", lastname:"Campos",age:35},
    {id:2,name:"Maria",lastname:"Lopez",age:20},
    {id:3, name:"Juan",lastname:"Castro",age:25}
  ] 

  selectedAlumno: Alumno = {id:0,name:'',lastname:'',age:0};

  openForEdit(alumno: Alumno):void{
    this.selectedAlumno = alumno;
  }

  addOrEddit():void{
    if(this.selectedAlumno.id === 0){//INSERT
      this.selectedAlumno.id = this.alumnoArray.length+1;
      this.alumnoArray.push(this.selectedAlumno);
    } 
    this.selectedAlumno = {id:0,name:'',lastname:'',age:0};
  }

  delete():void{
    if(confirm("¿Esta seguro de eliminar el Registro?")){
      this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
      this.selectedAlumno = {id:0,name:'',lastname:'',age:0};
    }
  }
}
