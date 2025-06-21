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
        tecnologias: [SkillsStack.React, SkillsStack.NodeJS, SkillsStack.MongoDB, SkillsStack.Kotlin],
        estado: 'En desarrollo',
      },
      {
        id: 'Equirent',
        title: 'Equirent',
        description: 'Plataforma web que transforma la movilidad urbana en Colombia mediante el alquiler de vehículos por horas, días o a largo plazo, y la venta de seminuevos. Me encargo del mantenimiento del sistema, integración de nuevas funcionalidades, conexión con APIs, autenticación y módulos administrativos.La solución elimina barreras financieras al ofrecer acceso sin cuota inicial, costos fijos que incluyen mantenimiento y seguros, y promueve una movilidad flexible, sostenible y con impacto social positivo.',
        imgUrl: ImgUrlProyect['ImgEquirent'] || '',
        url: 'https://www.equirent.com.co/',
        tecnologias: [SkillsStack.Webflow, SkillsStack.Wized, SkillsStack.Xano, SkillsStack.JavaScript],
        estado: 'En producción',
      },
    ];
  }
}
