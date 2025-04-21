import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private authService: AuthService) { }

  signedIn = false;

  ngOnInit() {
    this.authService.signedIn$.subscribe((signedin)=>{
      console.log(signedin);
        this.signedIn = signedin ;
    })

  }

}
