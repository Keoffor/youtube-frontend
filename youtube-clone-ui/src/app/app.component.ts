import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  picture: string ='';
  name: string = '';
  title = 'youtube-clone-ui';
  constructor(private oidcSecurityService: OidcSecurityService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth()
      .subscribe(({ isAuthenticated, userData }) => {
        console.log('App is authenticated', isAuthenticated);
        console.log(userData);
    });

    this.userService.registerUser().subscribe(data => {
      this.picture = data.picture;
 
    })
  }
}

