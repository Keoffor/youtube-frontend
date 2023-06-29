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

 this.httpClient.get("http://a16231bb3de3548789740402bc3cffbe-2113718577.us-east-1.elb.amazonaws.com:4200/callback");
}
}
