import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class MatchPassword implements Validator {
  /*validate(formGroup: FormGroup) {
    const { password, passwordConfirmation } = formGroup.value;
    console.log("1")
    console.log(password ,'',passwordConfirmation)
    if (password === passwordConfirmation) {
      return null;
    } else {
      return {
        passwordNotMatched: true,
      };
    }
  }*/

    validate: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        const group = control as FormGroup;  
        
        const { password, passwordConfirmation } = group.value;  
        
        if (password === passwordConfirmation) {
          return null;  
        } else {
          return { passwordNotMatched: true };  
        }
      };
}
