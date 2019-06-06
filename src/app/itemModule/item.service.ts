import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class ItemService {
    
    constructor(private httpClient: HttpClient){}

    public get(){
        const url = 'http://localhost:3000/items';
        return this.httpClient.get<Item>(url);
        // return this.httpClient.get<Item>(url).toPromise();
        /*return [
            { "id": 1, "name": "Item name 1"},
            { "id": 2, "name": "Item name 2"},
            { "id": 3, "name": "Item name 3"}
          ];*/
    }
    
}