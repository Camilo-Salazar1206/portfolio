import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  avatar = 'assets/img/profile_image.jpg';
  linkedinUrl = 'https://www.linkedin.com/in/camilo-salazar-dev/';
  githubUrl = 'https://github.com/Camilo-Salazar1206';
  googleDriveUrl = 'https://drive.google.com/file/d/1Ej5sOYzHJJOJoJJJJJJJJJJJJJJJJJJJ/view?usp=sharing';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit() {
    // Component ready
  }
}
