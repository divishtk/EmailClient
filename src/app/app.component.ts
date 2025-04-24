import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  //signedIn = false;
  signedin$: BehaviorSubject<boolean | null>;

  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedIn$;
  }

  /* ngOnInit() {
     this.authService.signedIn$.subscribe((signedin) => {
       console.log(signedin);
       this.signedIn = signedin;
     })
   }*/

  ngOnInit() {
    this.authService.checkAuth().subscribe(() => {});

    // setTimeout(()=>{
    //   this.authService.signOut().subscribe(()=>{})
    // },5000)
  }
}
