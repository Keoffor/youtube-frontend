import { Component, Input, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {
  isAuthenticate: boolean = false;

  @Input() photo: string | undefined;

  constructor(private oidcSecurityService: OidcSecurityService, private router: Router, private userService: UserService) {
  
  }
 
  ngOnInit(): void {
    this.oidcSecurityService.isAuthenticated$.subscribe(({isAuthenticated}) => {
      this.isAuthenticate = isAuthenticated;
      setTimeout(() => {
        this.router.navigate(['callback'])
        }, 2000);
    })
    // document.documentElement.style.setProperty('--background-image-url', `url(${this.picture})`);
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
    this.oidcSecurityService.logoffLocal();
    this.router.navigateByUrl('');
   

  }
}
