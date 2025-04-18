import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface UsernameAvailableStaus {
  available: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }


  usernameAvailable(uname: String) {
    return this.httpClient
      .post<UsernameAvailableStaus>('https://api.angular-email.com/auth/username', {
        username: uname,
      })
  }

}
