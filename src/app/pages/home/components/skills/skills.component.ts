import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SkillsStack,iconDirection,documentationDirection } from 'src/app/core/enums/routes.enums';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  TechnologyStack=SkillsStack;
  iconDirections=iconDirection;
  documentationDirections=documentationDirection;

  getRandomDelay(): number {
    return Math.random();
  }

}
