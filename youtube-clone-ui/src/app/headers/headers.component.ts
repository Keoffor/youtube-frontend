import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  isAuthenticate: boolean = false;

  constructor(private oidcSecurityService: OidcSecurityService) {
  }

  ngOnInit(): void {
    this.oidcSecurityService.isAuthenticated$.subscribe(({isAuthenticated}) => {
      this.isAuthenticate = isAuthenticated;
    })
  }

  login() {
    this.oidcSecurityService.authorize();
  }
  // refreshSession() {
  //   console.log('start refreshSession');
  //   this.oidcSecurityService.authorize();
  // }

  logOff() {
    this.oidcSecurityService.logoffAndRevokeTokens();

  }
}
