import { Component, OnInit, Input } from '@angular/core';
import { Item, State } from 'src/app/model';

@Component ({
    selector: 'item-form',
    templateUrl: './itemForm.component.html',
    styleUrls: ['./itemForm.component.css']
})
export class ItemForm implements OnInit {
    @Input()
    item: Item
    states: State[];
    constructor(){}

    ngOnInit(){
        this.states = [
            {
                key: 1,
                value:"Draft"
            },
            {
                key: 2,
                value:"Pilot"
            },
            {
                key: 3,
                value:"Publish"
            }
        ]
    }

    chekInClick(event: boolean){
        console.log(event);
        console.log(this.item.active);
        if(event){
            this.item.date = Date.now();
        }

    }

}