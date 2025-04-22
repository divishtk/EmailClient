import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { AuthSignOutComponent } from './auth-sign-out/auth-sign-out.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    AuthSignOutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  providers:[
    provideHttpClient(),
  ]
})
export class AuthModule { }
