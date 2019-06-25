
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home.component'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ItemModule } from './itemModule/itemModule.module';
import { ItemService } from './itemModule/item.service';
import { ItemViewer } from './itemModule/itemViewer/itemViewer.component';
import { ItemForm } from './itemModule/itemForm/itemForm.component';
import { RouterScroller } from '@angular/router/src/router_scroller';
import { NotFoundComponent } from './not-found.component';
import { ItemListComponent } from './itemModule/itemList/itemList.component';

const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    }, {
        path: '**',
        component: NotFoundComponent
    }]

@NgModule({
    imports: [BrowserModule, FormsModule, ItemModule,
        RouterModule.forRoot(routes)],
    declarations: [AppComponent,
        NotFoundComponent,
        HelloComponent,
        HomeComponent],
    providers: [ItemService],
    bootstrap: [AppComponent],
})
export class AppModule { }
