import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto001';
  nombre = 'Rodiguez Pablo';
  edad = 40;
  sueldos = [1700, 1600, 1900];
  contador = 0;


  ultimos3Sueldos(){
    let suma = 0;
    for(let x=0; x<this.sueldos.length; x++)
      suma += this.sueldos[x];
    
    return suma;
  }

  incrementar(){
    this.contador++;
  }

  decrementar(){
    this.contador--;
  }
}
