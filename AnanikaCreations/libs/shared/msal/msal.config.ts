import { MsalGuardConfiguration } from '@azure/msal-angular';
import { PublicClientApplication, BrowserCacheLocation, LogLevel, InteractionType } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    clientId: 'd127b307-e1ee-4ff8-a31b-082d5335dae5',
    authority: 'https://login.microsoftonline.com/937286e8-191e-40bc-9523-f908a730094c',
    redirectUri: 'http://localhost:4200', // Update as needed
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
    storeAuthStateInCookie: true,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: LogLevel, message: string) => {
        console.log(`[MSAL] ${level}: ${message}`);
      },
      logLevel: LogLevel.Info,
      piiLoggingEnabled: false,
    },
  },
};

export const msalInstance = new PublicClientApplication(msalConfig);

export const msalGuardConfig: MsalGuardConfiguration = {
  interactionType: InteractionType.Popup,
  authRequest: {
    scopes: ['User.Read'], // Define required scopes
  }
}