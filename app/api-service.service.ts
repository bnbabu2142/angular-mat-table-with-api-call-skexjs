import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders }    from '@angular/common/http';

@Injectable()
export class APIServiceService {

  constructor(private http: HttpClient) { }

  getData() : Promise<any>{
    return this.http.get('https://ec2-18-216-30-89.us-east-2.compute.amazonaws.com:8442/demo/findall').
    toPromise();
    //https://jsonplaceholder.typicode.com/todos
  }

}