import { Component } from '@angular/core';
import { JobDateExperience, JobDescription, JobTecnologies, JobTitle } from 'src/app/core/enums/routes.enums';
import { JobCompany } from '../../../../core/enums/routes.enums';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {

  JobTechnologiesMapping = {
    FRONTEND_DEVELOPER: JobTecnologies.FRONTEND_DEVELOPER_PRAGMA,
  };


  experiences = Object.keys(JobTitle).map(key => {
    return {
      title: JobTitle[key as keyof typeof JobTitle],
      tecnologies: this.JobTechnologiesMapping[key as keyof typeof JobTitle] || 'Tecnologías no disponibles',
      company: JobCompany[key as keyof typeof JobCompany] || JobCompany.PRAGMA,
      date: JobDateExperience[key as keyof typeof JobDateExperience] || JobDateExperience.DATE_PRAGMA,
      description: JobDescription[key as keyof typeof JobDescription],
    }
  });
}
