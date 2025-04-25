import { Component } from '@angular/core';
import { Email } from '../email';

@Component({
  selector: 'app-email-create',
  standalone: false,
  templateUrl: './email-create.component.html',
  styleUrl: './email-create.component.css'
})
export class EmailCreateComponent {

    showModal = false ;
    email: Email

    constructor(){
      this.email = {
        id:'',
        to:'',
        subject:'',
        html:'',
        text:'',
        from:'abhip@angular-email.com'
      }
    }
}
