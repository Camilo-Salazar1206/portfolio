import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-experience-item',
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent {
  @Input() experienceTitle:string="";
  @Input() experienceCompany:string="";
  @Input() experienceDescription:string="";
  @Input() experienceDate:string="";
  @Input() experienceTecnologies:string="";

}
