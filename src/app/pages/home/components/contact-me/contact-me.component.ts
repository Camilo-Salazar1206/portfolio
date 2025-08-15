import { Component } from '@angular/core';
import { Links } from 'src/app/core/enums/routes.enums';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
  links = Links;
  emailCopied = false;
  email = 'c4m1loo12@gmail.com';

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.emailCopied = true;
      setTimeout(() => {
        this.emailCopied = false;
      }, 2000);
    }).catch(err => {
      console.error('Error copying email: ', err);
    });
  }


  openEmailClient() {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}`, '_blank');
  }
}
