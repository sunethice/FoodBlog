import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable({ //decorator marks it as a service that can be injected
    providedIn: 'root' //declare that this service should be created by the root application injector.
})
export class FileUploadService {
    
    constructor(private httpClient: HttpClient) { }

    cpUploadFile(pFormData: FormData) {
        let promise = new Promise((resolve, reject) => {
            /*  two different ways to manage data from http requests
                observables - subscribe(), map() etc // has the advantage of cancelling the request
                Promises - toPromise(), then(), catch() etc.
            */
            this.httpClient.post('http://localhost:5000/upload', pFormData).subscribe((res) => {
                resolve(res);
            }, error => {
                reject(error);
            });
        });
        return promise;
    }
}