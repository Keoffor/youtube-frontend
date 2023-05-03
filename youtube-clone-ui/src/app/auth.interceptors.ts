import { Component, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpClient,
} from '@angular/common/http';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: OidcSecurityService, private http: HttpClient) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the user is authenticated
    // if (!this.auth.isAuthenticated) {
    //   // Redirect the user to the login page
    //   return this.http.get('login');
    // }

    // Add the authorization header to the request
    req.headers.append('Authorization', 'Bearer ' + this.auth.getAccessToken());

    // Continue with the request
    return next.handle(req);
  }

}

