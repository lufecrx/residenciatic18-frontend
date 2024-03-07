import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css',
})
export class ToolbarComponent {
  constructor(private authService: AuthService) {}

  isAuthenticated() {
    return AuthService.isAuthenticated();
  }

  logout() {
    this.authService.logout();
  }
}
