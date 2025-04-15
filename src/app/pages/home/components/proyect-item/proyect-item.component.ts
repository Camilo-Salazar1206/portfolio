import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SkillsStack } from 'src/app/core/enums/routes.enums';

@Component({
  selector: 'app-proyect-item',
  templateUrl: './proyect-item.component.html',
  styleUrls: ['./proyect-item.component.scss']
})
export class ProyectItemComponent {
  @Input() proyectId: string = '';
  @Input() proyectTitle: string = '';
  @Input() proyectDescription: string = '';
  @Input() proyectImgUrl: string = '';
  @Input() frontTecnologie!: string;
  @Input() backTecnologie!: string;
  @Input() dataBaseTecnologie!: string;

}
