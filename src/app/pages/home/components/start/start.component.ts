import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { urlButtons } from '../../../../core/enums/routes.enums';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  urlButtons=urlButtons;
  cvIcon:string="assets/img/CV-removebg-preview.png"
  avatar:string="assets/img/okarun.png"
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }
}
