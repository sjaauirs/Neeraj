import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  isAuthenticated = false;

  constructor(private authService: MsalService) {}

  async ngOnInit() {
    // Check if user is already logged in

    await this.authService.initialize();
    this.isAuthenticated = this.authService.instance.getActiveAccount() !== null;

    this.authService.instance.handleRedirectPromise().then((response: AuthenticationResult | null) => {
      if (response) {
        this.authService.instance.setActiveAccount(response.account);
        this.isAuthenticated = true;
        console.log('User authenticated:', response.account);
      }
    }).catch(error => {
      console.error('Error during authentication:', error);
    });
  }

  login() {
    this.authService.loginPopup().subscribe({
      next: (response) => {
        this.authService.instance.setActiveAccount(response.account);
        this.isAuthenticated = true;
        console.log('User logged in:', response.account);
      },
      error: (error) => {
        console.error('Login error:', error);
      }
    });
  }

  logout() {
    this.authService.logoutPopup().subscribe(() => {
      this.isAuthenticated = false;
      console.log('User logged out');
    });
  }

}
