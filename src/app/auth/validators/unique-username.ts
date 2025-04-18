import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { AsyncValidator } from '@angular/forms';
import { asapScheduler, map, Observable, catchError, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private httpClient: HttpClient) {
    console.log('http', this.httpClient);
  }
  validate(
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const { value } = control as FormControl;

    return this.httpClient
      .post<any>('https://api.angular-email.com/auth/username', {
        username: value,
      })
      .pipe(
        map((val) => {
          return null;
        }),
        catchError((err) => {
          return of({ notAUniqueUsername: true });
        })
      );
  }
}
