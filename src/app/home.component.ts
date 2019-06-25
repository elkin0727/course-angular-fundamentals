import { Component } from '@angular/core';

@Component({
    selector: 'home-app',
    template: `<div>Mi app <a routerLink="/oops">Not found</a> </div>`
})
export class HomeComponent {
}