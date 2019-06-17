import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../itemModule/item.service';
import { Item } from '../../model';

@Component({
    selector: 'item-viewer',
    templateUrl: './itemViewer.component.html',
    styleUrls: ['./itemViewer.component.css'],
})
export class ItemViewer {

    item:Item;

    constructor(private itemService:ItemService){}

    ngOnInit(){
        this.itemService.getOne(1).subscribe((item) => this.item=item);
    }
}