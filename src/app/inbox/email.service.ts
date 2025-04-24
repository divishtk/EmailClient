import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface EmailResponseType {
  id: string ;
  subject : string;
  from: string
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  rootUrl = 'https://api.angular-email.com';
  constructor(private htttpClient: HttpClient) { }


  getEmails(){
    return this.htttpClient.get<EmailResponseType[]>(`${this.rootUrl}/emails`)

  }

  



}
