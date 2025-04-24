import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../email.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-email-show',
  standalone: false,
  templateUrl: './email-show.component.html',
  styleUrl: './email-show.component.css',
})
export class EmailShowComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private emailService: EmailService
  ) {}

  ngOnInit() {
    /*  this.activatedRoute.params.subscribe(({ id }) => {
        this.emailService.fetchEmailById(id)
          .subscribe((email) => {
            console.log(email)
          });
      })*/

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.emailService.fetchEmailById(id)))
      .subscribe((email) => {
        console.log(email);
      });
  }
}
