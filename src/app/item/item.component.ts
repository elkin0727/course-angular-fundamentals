import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item }from '../model'


@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent  {

  @Input() item : Item;

  @Output()
  itemChange: EventEmitter<Item> = new EventEmitter();

  edit: boolean;
  constructor (){
    this.edit = false;
  }  

  ngOnInit() {
   console.log("ngOnChange");
    
      this.item = Object.assign({},this.item);
  }
  onEdit(){
  if (this.edit) {
    
    this.itemChange.emit(this.item);
    console.log("onEdit", newName)
  }
  this.edit = !this.edit;
  }
  handleChange(event: string){
    this.item.name=event;
    console.log("handleChange",event)
  }
}