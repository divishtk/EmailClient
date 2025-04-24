import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface EmailResponseType {
  id: string ;
  subject : string;
  from: string
}

interface EmailData {
  id: string ;
  subject : string;
  from: string;
  to:string;
  html:string
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

  fetchEmailById(id: string){
    return this.htttpClient.get<EmailData>(`${this.rootUrl}/emails/${id}`)

  }

  



}
