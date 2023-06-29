import { NgModule } from '@angular/core';
import { AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
  imports: [AuthModule.forRoot({
    config: {
      authority: 'https://dev-tl60vt6pqdxntnvf.us.auth0.com',
      redirectUrl: "https://utube.kendoc.vip/callback",
      clientId: 'eBB6ZmnNvps4PCKODqlSDfULXJH2LaJL',
      scope: 'openid profile offline_access email',
      responseType: 'code',
      silentRenew: true,
      useRefreshToken: true,
      secureRoutes: ['https://utube.kendoc.vip/api/'],
      customParamsAuthRequest: {
        audiences: 'https://utube.kendoc.vip/api/'
      }
    }
  })],
  providers: [],
  exports: [AuthModule],
})
export class AuthConfigModule {
}