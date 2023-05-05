import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
  imports: [AuthModule.forRoot({
    config: {
      authority: 'https://dev-tl60vt6pqdxntnvf.us.auth0.com',
      redirectUrl: "http://localhost:4200/callback",
      clientId: 'eBB6ZmnNvps4PCKODqlSDfULXJH2LaJL',
      scope: 'openid profile offline_access email',
      responseType: 'code',
      silentRenew: true,
      useRefreshToken: true,
      secureRoutes: ['http://localhost:8080/'],
      customParamsAuthRequest: {
        audiences: 'http://localhost:8080/'
      }
    }
  })],
  providers: [],
  exports: [AuthModule],
})
export class AuthConfigModule {
}
