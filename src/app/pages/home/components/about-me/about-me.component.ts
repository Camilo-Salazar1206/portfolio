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
  email = 'info@yoursite.com';
  website = 'http://www.yoursite.com';
  address = '198 West 21th Street, Suite 721, New York, NY 10016';

}
