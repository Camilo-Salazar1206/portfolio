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

  copyEmail() {
    const email = 'c4m1loo12@gmail.com';

    navigator.clipboard.writeText(email).then(() => {

      this.emailCopied = true;


      setTimeout(() => {
        this.emailCopied = false;
      }, 2000);
    }).catch(err => {

      console.error('Error al copiar el correo: ', err);
    });
  }
}
