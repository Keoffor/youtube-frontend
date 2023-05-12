import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CallingbackService {

  constructor(private http: HttpClient) { }

  makeCalls(){
    this.http.get("http://localhost:4200/callback");
  }
}
