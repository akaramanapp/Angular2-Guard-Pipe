import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Login } from './../Login'


@Injectable()
  export class GuardService {
      isLogin():Observable<Login[]>{
          return this.http
          .request('./app/login.json?=v=1.00')
          .map((response:Response)=><Login[]>response.json());
      }

  constructor(private http:Http){

  }
}