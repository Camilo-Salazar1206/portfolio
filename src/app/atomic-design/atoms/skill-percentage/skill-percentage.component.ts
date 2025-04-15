import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-percentage',
  templateUrl: './skill-percentage.component.html',
  styleUrls: ['./skill-percentage.component.scss']
})
export class SkillPercentageComponent {
@Input() skill!:string;
@Input() iconSkill!:string;
@Input() urlDocumentation!:string;
}
