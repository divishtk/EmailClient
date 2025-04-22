import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthSignOutComponent } from './auth-sign-out/auth-sign-out.component';
SignUpComponent

const routes: Routes = [
  {
    path: '',
    component: SignInComponent,
  },
  {
    path:'sign-up',
    component: SignUpComponent,
  },
  {
    path:'sign-out',
    component: AuthSignOutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
