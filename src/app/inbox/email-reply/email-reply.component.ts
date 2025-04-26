import { Component, Input } from '@angular/core';
import { Email } from '../email';
import { EmailService } from '../email.service';


@Component({
  selector: 'app-email-reply',
  standalone: false,
  templateUrl: './email-reply.component.html',
  styleUrl: './email-reply.component.css',
})
export class EmailReplyComponent {
  showModal = false;
  @Input() email!: Email;

  constructor(private emailService: EmailService){
    
  }

  ngOnChanges() {
    const textt = this.email.text.replace(/\n/gi, '\n>')
    this.email = {
      ...this.email,
      from: this.email.to,
      to: this.email.from,
      subject: `RE: ${this.email.subject}`,
      text : `\n\n\n---------${this.email.from} wrote: \n> ${textt}`
    };
  }

  onSubmit(email : Email) {
    console.log("caled")
    this.emailService.sendEmails(email)
                     .subscribe(()=>{
                       this.showModal = false ;
                     })
  }
}
