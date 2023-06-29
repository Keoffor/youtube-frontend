import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserResponse } from './user-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userId: string = '';
  baseUrl = environment.BACKEND_CLOUD_URI;

  constructor(private httpClient: HttpClient) { }

  subscribeToUser(userId: string): Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseUrl+"/api/user/subscribe/"+ userId, null);
  }

  unSubscribeToUser(userId: string):Observable<boolean> {
    return this.httpClient.post<boolean>(this.baseUrl+"/api/user/unsubscribe/"+userId, null);
  }
  registerUser(): Observable<UserResponse>{
    return this.httpClient.get<UserResponse>(this.baseUrl+"/api/user/register")
  }

  getUserId(): string {
    return this.userId;
  }
}
