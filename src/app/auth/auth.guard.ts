import { inject } from '@angular/core';
import { CanMatchFn, UrlTree, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map, skipWhile, take } from 'rxjs/operators';

export const authGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);


  return authService.signedIn$.pipe(
    skipWhile((value) => {
      return value === null
    }),
    take(1),
    map((isSignedIn) => {
      if (isSignedIn) {
        return true; 
      } else {
        router.navigate(['']); 
        return false; 
      }
    }),
  );


  //map((signedIn) => signedIn ? true : router.createUrlTree(['/']))
  // return authService.signedIn$.pipe(
  //   // Wait until `signedIn$` emits a non-null value
  //   skipWhile((signedIn) => signedIn === null),

  //   // Map the result to `true` or `false`
  //   map((isSignedIn) => {
  //     if (isSignedIn) {
  //       return true; // Allow navigation
  //     } else {
  //       router.navigate(['']); // Redirect to sign-in page
  //       return false; // Block navigation
  //     }
  //   }),
  // );
};