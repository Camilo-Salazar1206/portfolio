import { Component, OnInit } from '@angular/core';
import { DescriptionProyect, ImgUrlProyect, TitleProyect, SkillsStack, UrlProyects, GithubUrlProyects } from 'src/app/core/enums/routes.enums';
import { IFProyect } from 'src/app/models/proyects.interface';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  skillStack = SkillsStack;
  proyectos: IFProyect[] = [];

  ngOnInit(): void {
    this.proyectos = [
      {
        id: 'RutasParaMoteros',
        title: TitleProyect['RutasParaMoteros'] || '',
        description: DescriptionProyect['DescriptionRutasParaMoteros'] || '',
        imgUrl: ImgUrlProyect['ImgRutasParaMoteros'] || '',
        url: UrlProyects.RutasParaMoteros,
        githubUrlBackend: GithubUrlProyects.RutasParaMoteros_Backend,
        frontTecnologie: SkillsStack.React,
        backTecnologie: SkillsStack.NodeJS,
        dataBaseTecnologie: SkillsStack.MongoDB,
        mobileTecnologie:SkillsStack.Kotlin
      },

    ];
  }
}
