import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

interface UsernameAvailableStaus {
  available: boolean
}

interface SignUpDataTypes {
  username: string,
  password: string,
  passwordConfirmation: string
}

interface SignuUpResponse{
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  rootUrl = 'https://api.angular-email.com' ;
  signedIn$ = new BehaviorSubject(false);


  usernameAvailable(uname: String) {
    return this.httpClient
      .post<UsernameAvailableStaus>(`${this.rootUrl}/auth/username`, {
        username: uname,
      })
  }

  signUp(credentials: SignUpDataTypes) {
    return this.httpClient.post<SignuUpResponse>(`${this.rootUrl}/auth/signup`,
      credentials
    ).pipe(
      tap(()=>{ 
          this.signedIn$.next(true);
      })
    )
  }

}
