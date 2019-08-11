import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable({ //decorator marks it as a service that can be injected
   providedIn: 'root' //declare that this service should be created by the root application injector.
})
export class EchoService {
   constructor(private httpClient: HttpClient) { }

   makeCall(): Observable<any> {
      console.log('makeCall');
      return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts/1');
   }
}