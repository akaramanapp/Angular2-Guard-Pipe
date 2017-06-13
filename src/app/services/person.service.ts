/* * * ./app/comments/services/comment.service.ts * * */
// Imports
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PersonService {
     constructor (private http: Http) {}
     private personsUrl = 'http://jsonplaceholder.typicode.com/users'; 

    getPersons() : Observable<Comment[]> {
         return this.http.get(this.personsUrl)
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
}

