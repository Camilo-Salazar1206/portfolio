import { Component } from '@angular/core';
import { DescriptionProyect, ImgUrlProyect, TitleProyect, SkillsStack } from 'src/app/core/enums/routes.enums';
import { IFProyect } from 'src/app/models/proyects.interface';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent {
  skillStack=SkillsStack;
  proyectos: IFProyect[] = Object.keys(TitleProyect)
  .map(key => ({
    id: key,
    title: TitleProyect[key as keyof typeof TitleProyect] || '',
    description: DescriptionProyect[`Description${key}` as keyof typeof DescriptionProyect] || '',
    imgUrl: ImgUrlProyect[`Img${key}` as keyof typeof ImgUrlProyect] || '',
  }));



}
