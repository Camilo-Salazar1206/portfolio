import { Component } from '@angular/core';
import { RoutesEnum } from 'src/app/core/enums/routes.enums';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  routes = RoutesEnum;
}
