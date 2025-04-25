import { Component, Input } from '@angular/core';
import { Email } from '../email';
import { FormControl 
       , FormGroup 
       } from '@angular/forms';
@Component({
  selector: 'app-email-form',
  standalone: false,
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})
export class EmailFormComponent {
  emailForm!:FormGroup
  @Input() email!: Email


  ngOnInit(){
      const {subject , to , from , text } = this.email ;

      this.emailForm = new FormGroup({
        to: new FormControl(to),
        from: new FormControl(from),
        subject: new FormControl(subject),
        text: new FormControl(text),
      })
  }


}
