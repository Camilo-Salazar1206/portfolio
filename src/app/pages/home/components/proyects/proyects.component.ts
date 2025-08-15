import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImgUrlProyect, SkillsStack, UrlProyects, GithubUrlProyects } from 'src/app/core/enums/routes.enums';
import { IFProyect } from 'src/app/models/proyects.interface';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit, OnDestroy {
  skillStack = SkillsStack;
  proyectos: IFProyect[] = [];
  private subscription: Subscription = new Subscription();

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.loadProjects();
    
    // Subscribe to language changes to reload projects
    this.subscription.add(
      this.translate.onLangChange.subscribe(() => {
        this.loadProjects();
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private loadProjects() {
    this.proyectos = [
      {
        id: 'RutasParaMoteros',
        title: this.translate.instant('projects.titles.rutas_para_moteros'),
        description: this.translate.instant('projects.descriptions.rutas_para_moteros'),
        imgUrl: ImgUrlProyect['ImgRutasParaMoteros'] || '',
        url: UrlProyects.RutasParaMoteros,
        githubUrlBackend: GithubUrlProyects.RutasParaMoteros_Backend,
        tecnologias: [SkillsStack.React, SkillsStack.NodeJS, SkillsStack.MongoDB, SkillsStack.Kotlin],
        estado: this.translate.instant('projects.status.in_development'),
      },
      {
        id: 'Equirent',
        title: this.translate.instant('projects.titles.equirent'),
        description: this.translate.instant('projects.descriptions.equirent'),
        imgUrl: ImgUrlProyect['ImgEquirent'] || '',
        url: 'https://www.equirent.com.co/',
        tecnologias: [SkillsStack.Webflow, SkillsStack.Wized, SkillsStack.Xano, SkillsStack.JavaScript],
        estado: this.translate.instant('projects.status.in_production'),
      },
    ];
  }
}
