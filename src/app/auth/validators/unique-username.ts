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
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
    constructor(private httpClient: HttpClient, private authService: AuthService) {
    }
    validate(
        control: AbstractControl
    ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
        const { value } = control as FormControl;

        return this.authService.usernameAvailable(value)
            .pipe(
                map((val) => {
                    return null;
                }),
                catchError((err) => {
                    if (err.error.username) {
                        return of({ notAUniqueUsername: true });
                    } else {
                        return of({ noConnection: true });
                    }
                })
            );
    }
}
