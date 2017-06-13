import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
    selector: 'selector',
    template: `
    <div class="container">
  <h2>List Group With Custom Content</h2>
  <div class="list-group" [dragula]='"bag-items"'>
    <a href="#" class="list-group-item"  *ngFor="let item of items">
      <h4 class="list-group-item-heading">{{item}}</h4>
    </a>
  </div>
</div>
    <h1>User List Page</h1> <br/>   <button (click)="mesaj()">Mesaj</button>
    `
})
export class UserListComponent implements OnInit {
    hasChange: boolean = false;
      msg = '';

  items = [
    'Candlestick',
    'Dagger',
    'Revolver',
    'Rope',
    'Pipe',
    'Wrench'
  ];

  constructor(private dragula: DragulaService) { }

  ngOnInit() {
    this.dragula
      .drag
      .subscribe(value => {
        this.msg = `${ value[1].innerText }`;
        console.log(this.msg);
        console.log(this.items)
      });
  }

    mesaj(){
      this.hasChange = true;
    }
}