import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Item } from "../model";
import { map, catchError } from "rxjs/operators";
import { Observable, from, throwError } from "rxjs";

@Injectable()
export class ItemService {
    url = 'http://localhost:3000/items';
    currentId: number = 0;

    constructor(private httpClient: HttpClient){}

    public get(){
        return this.httpClient.get<Item[]>(this.url)
            .pipe(
                map(items => {
                    items.map(item => {
                        this.currentId = item.id > this.currentId ? item.id : this.currentId
                    })
                    return (items)
        }));
        // return this.httpClient.get<Item>(url).toPromise();
        /*return [
            { "id": 1, "name": "Item name 1"},
            { "id": 2, "name": "Item name 2"},
            { "id": 3, "name": "Item name 3"}
          ];*/
    }

    public getOne(id:number){
        return this.httpClient.get<Item>(`${this.url}/${id}`);
    }
    
    public post({ id = ++this.currentId, name }: Partial<Item>){
        return this.httpClient.post<Item>(this.url, { id, name });
    }

    public put(item: Item){
        return this.httpClient
        .put<Item>(`${this.url}/${item.id}`,item)
        .pipe(
            catchError((error: any)=>throwError("Eror!"))
        );
    }
}