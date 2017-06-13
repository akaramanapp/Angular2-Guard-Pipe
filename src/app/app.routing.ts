import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { UserListComponent } from './userlist.component'
import {PersonListComponent} from './personlist.component'
import {GuardDeactiveComponent} from './GuardDeactive'
import { GuardActiveComponent } from './GuardActive'

const appRoutes: Routes = [
    { path: 'main', component: AppComponent},
    { path: 'users', component: UserListComponent, canDeactivate: [GuardDeactiveComponent]},
    { path: 'persons', component: PersonListComponent, canActivate:[GuardActiveComponent]},
    { path: '**', component: UserListComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);