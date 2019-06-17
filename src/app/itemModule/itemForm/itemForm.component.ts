import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/model';

@Component ({
    selector: 'item-form',
    templateUrl: './itemForm.component.html',
    styleUrls: ['./itemForm.component.css']
})
export class ItemForm implements OnInit {
    @Input()
    item: Item
    constructor(){}

    ngOnInit(){

    }

    chekInClick(event: boolean){
        console.log(event);
        console.log(this.item.active);
        if(event){
            this.item.date = Date.now();
        }

    }

}