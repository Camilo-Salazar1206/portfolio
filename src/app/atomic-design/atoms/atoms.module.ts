import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SkillPercentageComponent } from './skill-percentage/skill-percentage.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { SkeletonLoaderComponent } from './skeleton-loader/skeleton-loader.component';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { InitialLoaderComponent } from './initial-loader/initial-loader.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    ButtonComponent,
    SkillPercentageComponent,
    LanguageSelectorComponent,
    SkeletonLoaderComponent,
    LoadingOverlayComponent,
    InitialLoaderComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forChild()
  ],
  exports: [
    ButtonComponent,
    TranslateModule,
    SkillPercentageComponent,
    LanguageSelectorComponent,
    SkeletonLoaderComponent,
    LoadingOverlayComponent,
    InitialLoaderComponent
  ]
})
export class AtomsModule { }
