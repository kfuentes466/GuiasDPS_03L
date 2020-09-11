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
    {id:1,name:"Alex", lastname:"Campos",age:35,direccion:"San Salvador",telefono:"1234-5678",email:"ejem@ejem.com"},
    {id:2,name:"Maria",lastname:"Lopez",age:20,direccion:"San marcosd",telefono:"1234-5678",email:"eje@eje.com"},
    {id:3, name:"Juan",lastname:"Castro",age:25,direccion:"San vicente",telefono:"1234-5678",email:"ush@ush.es"}
  ] 

  selectedAlumno: Alumno = {id:0,name:'',lastname:'',age:0,direccion:'',telefono:'',email:''};

  openForEdit(alumno: Alumno):void{
    this.selectedAlumno = alumno;
  }

  addOrEddit():void{
    if(this.selectedAlumno.age != 0 && this.selectedAlumno.age!=null && this.selectedAlumno.name!='' && this.selectedAlumno.lastname!='' && this.selectedAlumno.direccion!='' && this.selectedAlumno.telefono!='' && this.selectedAlumno.email!=''){
      if(this.selectedAlumno.id === 0){//INSERT
        this.selectedAlumno.id = this.alumnoArray.length+1;
        this.alumnoArray.push(this.selectedAlumno);
      } 
      this.selectedAlumno = {id:0,name:'',lastname:'',age:0,direccion:'',telefono:'',email:''};
    }else{
      alert("Datos vacios !");
    }
    
  }

  delete():void{
    if(this.selectedAlumno.age != 0 && this.selectedAlumno.age!=null && this.selectedAlumno.name!='' && this.selectedAlumno.lastname!='' && this.selectedAlumno.direccion!='' && this.selectedAlumno.telefono!='' && this.selectedAlumno.email!=''){
      if(confirm("¿Esta seguro de eliminar el Registro?")){
        this.alumnoArray = this.alumnoArray.filter(x => x != this.selectedAlumno);
        this.selectedAlumno = {id:0,name:'',lastname:'',age:0,direccion:'',telefono:'',email:''};
     }
    }
    
  }
}
