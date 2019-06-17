import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ItemModule } from './itemModule/itemModule.module';
import { ItemService } from './itemModule/item.service';
import { ItemViewer } from './itemModule/itemViewer/itemViewer.component';
import { ItemForm } from './itemModule/itemForm/itemForm.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ItemModule ],
  declarations: [ AppComponent, HelloComponent, ItemViewer, ItemForm ],
  providers: [ ItemService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
