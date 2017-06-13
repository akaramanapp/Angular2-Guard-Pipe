import { CanDeactivate } from '@angular/router';
import { UserListComponent } from './userlist.component'


export class GuardDeactiveComponent implements CanDeactivate<UserListComponent> {
    canDeactivate(target:UserListComponent){
        if(target.hasChange){
            return window.confirm("Emin misiniz?");
        }else{
            return true;
        }
    }

}