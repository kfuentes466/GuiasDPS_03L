import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  registro=[];
  empleado:any;
  nombre:string;
  salario:number;
  contador:number;
  isss:number;
  renta:number;
  afp:number;
  descuentos:number;
  recibir:number;
  error:number;
  constructor() { }

  ngOnInit(): void {
    this.salario=0;
    this.nombre='';
    this.contador=0;
    this.descuentos=0;
    this.recibir=0;
    this.error=0;
  }
  ingresar(){

    if(this.salario>0 && this.nombre!='')
    {
      this.error=0;
    
    this.renta=this.salario*0.11;
    this.afp=this.salario*0.073;
    this.isss=this.salario*0.051;
    this.descuentos=this.renta+this.afp+this.isss;
    this.recibir=this.salario-this.descuentos;
    
    if(this.recibir<0)
    {
      this.recibir=0;
    }
    this.empleado={"nombre":this.nombre,"salario":this.salario,"afp":this.afp,"renta":this.renta,"isss":this.isss,"descuentos":this.descuentos,"recibir":this.recibir};
    this.registro.push(this.empleado);
    this.contador++;
    }
    else if(this.salario<=0)
    {

      this.error=1;
      //this.contador=0;
     
    }
    }
  }


