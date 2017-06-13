import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing'
import { AppComponent } from './app.component';
import { NewComponent } from './new-component';
import { PersonService } from './services/person.service';
import { UserListComponent } from './userlist.component'
import {PersonListComponent} from './personlist.component'
import {MenuComponent} from './app.menu'
import {GuardDeactiveComponent} from './GuardDeactive'
import { GuardService } from './services/guard.service'
import { GuardActiveComponent } from './GuardActive'
import { DragulaModule } from 'ng2-dragula/ng2-dragula';


@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    UserListComponent,
    PersonListComponent,
    MenuComponent

  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule
  ],
  providers: [GuardDeactiveComponent, PersonService, GuardService, GuardActiveComponent],
  bootstrap: [MenuComponent]
})
export class AppModule { }
