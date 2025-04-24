import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent {
  constructor(private authService: AuthService ,private router: Router) {}

  signInForm!: FormGroup;
  usernameSignInControl!: FormControl;
  passwordSignInControl!: FormControl;

  ngOnInit() {
    this.signInForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern(/^[a-z0-9]+$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    });
    this.usernameSignInControl = this.signInForm.get('username') as FormControl;
    this.passwordSignInControl = this.signInForm.get('password') as FormControl;
  }

  onSubmit() {
    if (this.signInForm.invalid) {
      return;
    }

    this.authService.signIn(this.signInForm.value).subscribe({
      next: ()=>{
        this.router.navigateByUrl('/inbox')
      },
      error:({error})=>{
           // if(error.username || error.password){
                this.signInForm.setErrors({credentials: error})
            //}
      }
    });
  }
}
