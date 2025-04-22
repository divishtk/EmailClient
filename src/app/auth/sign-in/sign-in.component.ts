import { Component } from '@angular/core';
import {
  FormControl
  , FormGroup
  , Validators
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  standalone: false,
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  signInForm!: FormGroup;
  usernameSignInControl!: FormControl
  passwordSignInControl!: FormControl



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
      ])
    })

    this.usernameSignInControl = this.signInForm.get('username') as FormControl ;
    this.passwordSignInControl = this.signInForm.get('password') as FormControl ;

  }

  




}
