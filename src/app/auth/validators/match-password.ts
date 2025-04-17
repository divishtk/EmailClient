import {
  AbstractControl,
  FormGroup,
  ValidationErrors,
  Validator,
} from '@angular/forms';

export class MatchPassword implements Validator {
  validate(formGroup: FormGroup) {
    const { password, passwordConfirmation } = formGroup.value;
    if (password === passwordConfirmation) {
      return null;
    } else {
      return {
        passwordNotMatched: true,
      };
    }
  }
}
