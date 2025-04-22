import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-sign-out',
  standalone: false,
  templateUrl: './auth-sign-out.component.html',
  styleUrl: './auth-sign-out.component.css',
})
export class AuthSignOutComponent {
  constructor(private authService: AuthService , private router: Router) {}

  ngOnInit() {
    this.authService.signOut().subscribe(() => {
      this.router.navigateByUrl('/');
    });
  }
}
