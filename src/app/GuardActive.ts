import { CanActivate } from '@angular/router';
import { GuardService } from './services/guard.service'
import { Injectable} from '@angular/core'
import {Login } from './Login';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GuardActiveComponent implements CanActivate {
    resultList:Observable<Login[]>;
    result:Promise<boolean> | boolean;
    canActivate(){
        this.resultList=this.service.isLogin();
        this.result=this.resultList.toPromise().then(data=>data.filter(fill=>fill.name=='Kerim')[0].login);
        this.result.then(function(result){
            if(result==false){
                alert('Lütfen login olunuz.');
            }
        })
        return true;
    }
    constructor(private service: GuardService) {
          
    }

    ngOnInit() { }
}