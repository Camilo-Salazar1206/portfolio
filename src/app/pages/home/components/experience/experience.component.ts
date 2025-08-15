import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, OnDestroy {
  experiences: any[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.loadExperiences();
    
    // Subscribe to language changes to reload experiences
    this.subscription.add(
      this.translate.onLangChange.subscribe(() => {
        this.loadExperiences();
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private loadExperiences() {
    this.experiences = [
      {
        title: this.translate.instant('jobs.titles.frontend_developer'),
        tecnologies: this.translate.instant('jobs.technologies.frontend_developer_pragma'),
        company: this.translate.instant('jobs.companies.pragma'),
        date: this.translate.instant('jobs.dates.pragma'),
        description: this.translate.instant('jobs.descriptions.frontend_developer'),
      },
      {
        title: this.translate.instant('jobs.titles.full_stack_developer'),
        tecnologies: this.translate.instant('jobs.technologies.full_stack_developer_tinge'),
        company: this.translate.instant('jobs.companies.tinge_studio'),
        date: this.translate.instant('jobs.dates.tinge_studio'),
        description: this.translate.instant('jobs.descriptions.full_stack_developer'),
      }
    ].reverse();
  }
}
