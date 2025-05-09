import { Component } from '@angular/core';
import { Email } from '../email';
import { AuthService } from '../../auth/auth.service';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-create',
  standalone: false,
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css'
})
export class EmailCreateComponent {

    showModal = false ;
    email: Email

    constructor(private authService: AuthService,private emailService: EmailService){
      this.email = {
        id:'',
        to:'',
        subject:'',
        html:'',
        text:'',
        from: `${authService.username}@angular-email.com`
      }
    }

    onEmailSubmit(email: Email){
        this.emailService.sendEmails(email)
                         .subscribe(()=>{
                           this.showModal = false ; 
                         })
    }
}
