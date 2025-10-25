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
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(this.email).then(() => {
        this.showCopiedMessage();
      }).catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
        this.fallbackCopyText(this.email);
      });
    } else {
      this.fallbackCopyText(this.email);
    }
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

  // Fallback copy usando textarea
  private fallbackCopyText(text: string) {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textarea);
      if (successful) {
        this.showCopiedMessage();
      } else {
        console.error('Copy command was not successful');
      }
    } catch (err) {
      console.error('Fallback: Oops, unable to copy', err);
    }
  }
}
