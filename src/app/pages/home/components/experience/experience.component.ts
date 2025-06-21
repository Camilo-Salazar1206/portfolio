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
    FULL_STACK_DEVELOPER: JobTecnologies.FULL_STACK_DEVELOPER_TINGE,
  };


  experiences = Object.keys(JobTitle).map(key => {
    let company = JobCompany[key as keyof typeof JobCompany] || JobCompany.PRAGMA;
    let date = JobDateExperience[key as keyof typeof JobDateExperience] || JobDateExperience.DATE_PRAGMA;
    if (key === 'FULL_STACK_DEVELOPER') {
      company = JobCompany.TINGE_STUDIO;
      date = JobDateExperience.DATE_TINGE_STUDIO;
    }
    return {
      title: JobTitle[key as keyof typeof JobTitle],
      tecnologies: this.JobTechnologiesMapping[key as keyof typeof JobTitle] || 'Tecnologías no disponibles',
      company,
      date,
      description: JobDescription[key as keyof typeof JobDescription],
    }
  }).reverse();
}
