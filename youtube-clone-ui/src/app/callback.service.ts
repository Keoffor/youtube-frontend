import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CallbackService {

  constructor(private httpClient: HttpClient) { }


getcallbacks(){

 this.httpClient.get("http://localhost:4200/callback");
}
}