import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { msalInstance } from '@ananika-creations/msal';
import { MsalService, MsalBroadcastService, MSAL_INSTANCE, MsalRedirectComponent, MsalGuard, MSAL_GUARD_CONFIG } from '@azure/msal-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    {
      provide: MSAL_INSTANCE,
      useValue: msalInstance
    },
    MsalService,
    MsalBroadcastService,
    MsalGuard
  ],
};
