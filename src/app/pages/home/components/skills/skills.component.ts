import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SkillsStack, iconDirection, documentationDirection,NumbersEnum } from 'src/app/core/enums/routes.enums';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  TechnologyStack = SkillsStack;
  iconDirections = iconDirection;
  documentationDirections = documentationDirection;
  isScrolling = false;
  scrollTimeout: any;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit(): void {}

  getRandomDelay(): number {
    return Math.random();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolling = true;
    clearTimeout(this.scrollTimeout);
    this.scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    },NumbersEnum.ScrollThreshold);
  }
}
