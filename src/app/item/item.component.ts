import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent  {

  @Input() item;

  @Output()
  itemChange: EventEmitter<string> = new EventEmitter();

  edit: boolean;
  constructor (){
    this.edit = false;
  }  
  onEdit(){
  if (this.edit) {
    this.itemChange.emit(this.item);
  }
  this.edit = !this.edit;
  }
}