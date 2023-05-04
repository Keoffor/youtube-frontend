import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userId: string = '';

  constructor(private httpClient: HttpClient) { }

  subscribeToUser(userId: string): Observable<boolean>{
    return this.httpClient.post<boolean>("http://localhost:8080/api/user/subscribe/"+userId, null);
  }
  registerUser(){
    this.httpClient.get<string>("http://localhost:8080/api/user/register").subscribe(data =>{
     return this.userId = data;
    })
  }

  getUserId(): string {
    return this.userId;
  }
}