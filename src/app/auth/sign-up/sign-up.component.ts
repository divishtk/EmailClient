import { Component } from '@angular/core';
import { FormControl ,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {


  signUpForm = new FormGroup({
    username: new FormControl(''),
   // email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  })

}
