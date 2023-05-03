import { Component, OnInit } from '@angular/core';
import { LoginResponse, OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'youtube-clone-ui';
  constructor(private oidcSecurityService: OidcSecurityService) {
  }

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth()
      .subscribe(({ isAuthenticated, userData }) => {
        console.log('App is authenticated', isAuthenticated);
        console.log(userData);
    });
  }
}

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.getTodos();
//   }

//   getTodos() {
//     this.http.get('https://localhost:8080/todos', {
//       headers: new Headers({
//         'Authorization': 'Bearer ' + this.auth.getAccessToken()
//       })
//     }).subscribe(res => {
//       console.log(res);
//     }, err => {
//       console.log(err);
//     });
//   }
// }
