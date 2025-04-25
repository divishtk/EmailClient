import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Email } from '../inbox/email';

interface EmailResponseType {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';
  constructor(private htttpClient: HttpClient) {}

  getEmails() {
    return this.htttpClient.get<EmailResponseType[]>(`${this.rootUrl}/emails`);
  }

  fetchEmailById(id: string) {
    return this.htttpClient.get<Email>(`${this.rootUrl}/emails/${id}`);
  }
}
