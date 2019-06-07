import { Component } from '@angular/core';
import { Item } from './model';
import { ItemService } from './itemModule/item.service';
import { Observable } from 'rxjs';

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

private data: Observable<Item[]>;
  constructor (private itemService:ItemService){
    this.numero=25;
    this.isHigher = this.isNumberHigher();
    this.title = "<span>Este es un span</span>"
    let i: number =0;
    //this.data = [ {id: i++,name: 'hola'} , {id: i++,name: 'esto'},{id: i++,name: 'es'},{id: i++,name: 'un'},{id: i++,name: 'arreglo'}];
    this.data = itemService.get();

    // itemService.get().then((items:Array<Item>)=>{
    //     this.data= items;
    // });
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
    //this.textValue = "HOLA";
    //this.data = [...this.data,{id: 6, name: "adios"}];
    this.itemService.post({name: this.textValue}).subscribe((response: any) => {
        console.log(response);
        this.data = this.itemService.get();  
    });
  }
  
  refresh(item: Item){
    console.log('refresh', item);

    //this.data[item.id].name = item.name;
    //this.data.find((it) => it.id ==item.id ).name = item.name;

  }
}
