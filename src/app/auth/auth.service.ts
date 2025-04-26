import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

interface SigninResponse{
  username: string ;
}

interface UsernameAvailableStaus {
  available: boolean;
}

interface SignUpDataTypes {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignuUpResponse {
  username: string;
}

interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

interface SignInData {
  password: boolean;
  username: string;
}



@Injectable({
  providedIn: 'root',
})
export class AuthService {
  username = ''
  constructor(private httpClient: HttpClient) {}

  rootUrl = 'https://api.angular-email.com';
  signedIn$ = new BehaviorSubject<boolean | null>(null);

  usernameAvailable(uname: String) {
    return this.httpClient.post<UsernameAvailableStaus>(
      `${this.rootUrl}/auth/username`,
      {
        username: uname,
      }
    );
  }

  signUp(credentials: SignUpDataTypes) {
    return this.httpClient
      .post<SignuUpResponse>(
        `${this.rootUrl}/auth/signup`,
        credentials
        //{
        //   withCredentials: true
        // }
      )
      .pipe(
        tap((resp) => {
          this.signedIn$.next(true);
          this.username = resp.username ;
        })
      );
  }

  checkAuth() {
    return this.httpClient
      .get<SignedInResponse>(
        `${this.rootUrl}/auth/signedin`
        //   {
        // withCredentials:true
        //   }
      )
      .pipe(
        tap(({ authenticated 
             ,  username
             }) => {
          this.signedIn$.next(authenticated);
          this.username = username ;  
        })
      );
  }

  signOut() {
    return this.httpClient.post(`${this.rootUrl}/auth/signout`, {}).pipe(
      tap(() => {
        this.signedIn$.next(false);
      })
    );
  }

  signIn(signInCredentials: SignInData) {
    return this.httpClient
      .post<SigninResponse>(`${this.rootUrl}/auth/signin`, signInCredentials)
      .pipe(
        tap((resp) => {
          this.signedIn$.next(true);
          this.username = resp.username ; 
        })
      );
  }
}
