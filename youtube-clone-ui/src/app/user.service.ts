import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserResponse } from './user-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userId: string = '';

  constructor(private httpClient: HttpClient) { }

  subscribeToUser(userId: string): Observable<boolean>{
    return this.httpClient.post<boolean>("http://localhost:8080/api/user/subscribe/"+ userId, null);
  }

  unSubscribeToUser(userId: string):Observable<boolean> {
    return this.httpClient.post<boolean>("http://localhost:8080/api/user/unsubscribe/"+userId, null);
  }
  registerUser(): Observable<UserResponse>{
    return this.httpClient.get<UserResponse>("http://localhost:8080/api/user/register")
  }

  getUserId(): string {
    return this.userId;
  }
}
