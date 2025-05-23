import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {

  showCopiedMessageFlag = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  fullName = 'Louie Jie Mahusay';
  phone = '+ 1235 2355 98';
  email = 'c4m1loo12@gmail.com';
  website = 'http://www.yoursite.com';
  address = '198 West 21th Street, Suite 721, New York, NY 10016';

  copyEmail() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.showCopiedMessage();
    }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
    });
  }

  showCopiedMessage() {
    this.showCopiedMessageFlag = true;
    setTimeout(() => {
      this.showCopiedMessageFlag = false;
    }, 3000);
  }

  openEmailClient() {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${this.email}`, '_blank');
  }
}
