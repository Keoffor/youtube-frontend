import { NgModule } from '@angular/core';
import { AuthModule } from 'angular-auth-oidc-client';


@NgModule({
    imports: [AuthModule.forRoot({
        config: {
            authority: 'https://dev-tl60vt6pqdxntnvf.us.auth0.com',
            redirectUrl: window.location.origin,
            clientId: 'KjDAzLyT5bRWcJpp4YIaQpX1TfWITN7o',
            scope: 'openid profile offline_access',
            responseType: 'code',
            silentRenew: true,
            useRefreshToken: true,
        }
      })],
    exports: [AuthModule],
})
export class AuthConfigModule {}
