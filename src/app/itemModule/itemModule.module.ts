import { NgModule, Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import { ItemComponent } from './../item/item.component';
import { ItemListComponent } from './itemList/itemList.component';
import { Route, RouterModule } from '@angular/router';
import { ItemViewer } from './itemViewer/itemViewer.component';
import { ItemForm } from './itemForm/itemForm.component';


const routes: Route[] = [
    {
        path: 'itemlist',
        component: ItemListComponent
    }];
@NgModule({
  imports:      [ CommonModule, FormsModule, HttpClientModule,
    RouterModule.forChild(routes) ],
  declarations: [ 
      ItemComponent,
      ItemListComponent,
      ItemViewer,
      ItemForm
    ],
  exports: [ ItemComponent ]
})
export class ItemModule {

 }
