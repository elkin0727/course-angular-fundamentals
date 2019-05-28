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
private data : Item[];
  constructor (){
    this.numero=25;
    this.isHigher = this.isNumberHigher();
    this.title = "<span>Este es un span</span>"
    let i: number =0;
    this.data = [ {id: i++,name: 'hola'} , {id: i++,name: 'esto'},{id: i++,name: 'es'},{id: i++,name: 'un'},{id: i++,name: 'arreglo'}];
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
    this.data = [...this.data,{id: 6, name: "adios"}];
  }
  
  refresh(item: Item){
    console.log('refresh', item);

    //this.data[item.id].name = item.name;
    this.data.find((it) => it.id ==item.id ).name = item.name;
  }
}
