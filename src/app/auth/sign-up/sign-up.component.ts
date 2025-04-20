import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatchPassword } from '../validators/match-password';
import { UniqueUsername } from '../validators/unique-username';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: false,
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent implements OnInit {
  constructor(private matchPassword: MatchPassword ,private uniqueUsername : UniqueUsername ,private authService: AuthService) {
  }

  signUpForm!: FormGroup;
  usernameControl!: FormControl;
  passwordControl!: FormControl;
  passwordConfirmationControl!: FormControl;



  ngOnInit() {
    this.signUpForm = new FormGroup(
      {
        username: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
          Validators.pattern(/^[a-z0-9]+$/),
        ],
        [
          this.uniqueUsername.validate.bind(this.uniqueUsername)
        ]
      ),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ]),
        passwordConfirmation: new FormControl('', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ]),
      },
      {
        validators: [this.matchPassword.validate.bind(this.matchPassword)]
      }
    );

    this.usernameControl = this.signUpForm.get('username') as FormControl ;
    this.passwordControl = this.signUpForm.get('password') as FormControl ;
    this.passwordConfirmationControl = this.signUpForm.get('passwordConfirmation') as FormControl ;

  }



  onSubmit(){
      if(this.signUpForm.invalid){
          return ;
      }
      this.authService.signUp(this.signUpForm.value)
                      .subscribe((response)=>{
                          console.log(response);
                      })
  }
}
