import { Component } from '@angular/core';
import { IFExperience } from '../../../../models/experience.interface';
import { JobDateExperience, JobDescription, JobTitle } from 'src/app/core/enums/routes.enums';
import { JobCompany } from '../../../../core/enums/routes.enums';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = Object.keys(JobTitle).map(key => {
    return {
      title: JobTitle[key as keyof typeof JobTitle],
      company:JobCompany[key as keyof typeof JobCompany] || JobCompany.PRAGMA,
      date:JobDateExperience[key as keyof typeof JobDateExperience] || JobDateExperience.DATE_PRAGMA,
      description: JobDescription[key as keyof typeof JobDescription]
    }
  })


  }


