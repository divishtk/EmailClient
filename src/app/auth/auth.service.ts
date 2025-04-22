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

interface SignuUpResponse {
  username: string
}

interface SignedInResponse {
  authenticated: boolean,
  username: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  rootUrl = 'https://api.angular-email.com';
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
      //{
      //   withCredentials: true
      // }
    ).pipe(
      tap(() => {
        this.signedIn$.next(true);
      })
    )
  }

  checkAuth() {
    return this.httpClient.get<SignedInResponse>(`${this.rootUrl}/auth/signedin`
      //   {
      // withCredentials:true
      //   }
    ).
      pipe(
        tap(({ authenticated }) => {
          console.log('res', authenticated);
          this.signedIn$.next(authenticated)
        })
      )}

      
      signOut(){
        return this.httpClient.post(`${this.rootUrl}/auth/signout`,{})
        .pipe(
          tap(()=>{
              this.signedIn$.next(false);
          })
        )
      }



}
