import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  fullName = 'Louie Jie Mahusay';
  phone = '+ 1235 2355 98';
  email = 'cam1loo12@gmail.com'; // Actualizado para que coincida con el correo que estás copiando
  website = 'http://www.yoursite.com';
  address = '198 West 21th Street, Suite 721, New York, NY 10016';

  copyEmail() {

    navigator.clipboard.writeText('c4m1loo12@gmail.com').then(() => {
      this.showCopiedMessage();
    }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
    });
  }

  showCopiedMessage() {

    const existingMessage = document.querySelector('.copied-message');
    if (existingMessage) return;

    const messageElement = document.createElement('div');
    messageElement.classList.add('copied-message');
    messageElement.textContent = 'Correo electrónico copiado al portapapeles';

    document.body.appendChild(messageElement);



    setTimeout(() => {
      if (messageElement.parentNode) {
        document.body.removeChild(messageElement);
      }
    }, 3000);
  }
}
