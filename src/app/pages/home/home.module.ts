import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { StartComponent } from './components/start/start.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AtomicDesignModule } from 'src/app/atomic-design/atomic-design.module';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { ProyectItemComponent } from './components/proyect-item/proyect-item.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceItemComponent } from './components/experience-item/experience-item.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    StartComponent,
    AboutMeComponent,
    SkillsComponent,
    ProyectsComponent,
    ProyectItemComponent,
    ExperienceComponent,
    ExperienceItemComponent,
    ContactMeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    AtomicDesignModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  exports:[
    AtomicDesignModule,
    HomeComponent
  ]
})
export class HomeModule { }
