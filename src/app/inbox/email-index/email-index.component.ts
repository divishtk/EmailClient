import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-email-index',
  standalone: false,
  templateUrl: './email-index.component.html',
  styleUrl: './email-index.component.css',
})
export class EmailIndexComponent {
  emails = [];
  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.emailService.getEmails().subscribe((emailsResponse : any) => {
      this.emails = emailsResponse ;
    });
  }
}
