import { NgModule, Component  } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {CommonModule} from '@angular/common'
 

import { ItemComponent } from './../item/item.component';

@NgModule({
  imports:      [ CommonModule, FormsModule ],
  declarations: [ ItemComponent ],
  exports: [ ItemComponent ]
})
export class ItemModule {

 }
