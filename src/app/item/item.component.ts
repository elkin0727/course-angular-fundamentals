import { Component, Input } from '@angular/core';


@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {

  @Input() item;

  constructor (){

  }  
}