import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu',
    template: `
    <nav>
    <a routerLink="/main" >Ana Sayfa</a>
    <a routerLink="/persons" >Personeller</a>
    <a routerLink="/users" >Kullanıcılar</a>
    </nav>
    <router-outlet></router-outlet>
    `
})
export class MenuComponent {
    constructor() { }
}