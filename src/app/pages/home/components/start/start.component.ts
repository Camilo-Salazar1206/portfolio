import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { Links, urlButtons } from 'src/app/core/enums/routes.enums';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  urlButtons = urlButtons;
  cvIcon: string = "assets/img/CV-removebg-preview.png";
  avatar: string = "assets/img/profile_image.jpg";


  linkedinUrl: string = Links.LINKEDIN;
  githubUrl: string = Links.GITHUB;
  googleDriveUrl: string = Links.GOOGLE_DRIVE;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }
}
