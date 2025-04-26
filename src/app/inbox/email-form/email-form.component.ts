import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Email } from '../email';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-email-form',
  standalone: false,
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css',
})
export class EmailFormComponent {
  emailForm!: FormGroup;
  @Input() email!: Email;
  toFormControl!: FormControl;
  fromFormControl!: FormControl;
  subjectFormControl!: FormControl;
  contentFormControl!: FormControl;
  @Output() sendEmail = new EventEmitter();

  ngOnInit() {
    const { subject, to, from, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });

    this.toFormControl = this.emailForm.get('to') as FormControl;
    this.fromFormControl = this.emailForm.get('from') as FormControl;
    this.subjectFormControl = this.emailForm.get('subject') as FormControl;
    this.contentFormControl = this.emailForm.get('text') as FormControl;
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }
    this.sendEmail.emit(this.emailForm.value);
  }
}
