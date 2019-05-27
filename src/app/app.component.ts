import { Component } from '@angular/core';
import { Item } from './model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular fundamentals';

  private numero: number;
private isHigher: boolean;
private title: string;
private textValue: string;
private data : string[];
  constructor (){
    this.numero=25;
    this.isHigher = this.isNumberHigher();
    this.title = "<span>Este es un span</span>"
    this.data = [ 'hola', 'esto', 'es','un','arreglo'];
  }

  isNumberHigher(){
    if(this.numero > 20){
      return true;  
    }
    return false;
  }

  onClick(event: any)
  {
    console.log("clicking");
    console.log(event, this.textValue);
    this.textValue = "HOLA";
    this.data = [...this.data,"adios"];
  }
  
  refresh(event: Item){

  }
}
