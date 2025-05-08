import { Component, Input } from '@angular/core';
import { GithubUrlProyects } from 'src/app/core/enums/routes.enums';
import { documentationDirection } from 'src/app/core/enums/routes.enums';


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
  @Input() proyectUrl: string = '';
  @Input() frontTecnologie: string = '';
  @Input() backTecnologie: string = '';
  @Input() mobileTecnologie:string='';
  @Input() dataBaseTecnologie: string = '';

  githubUrls = GithubUrlProyects;

  openProjectUrl(): void {
    if (this.proyectUrl) {
      window.open(this.proyectUrl, '_blank');
    }
  }

  openGitHub(url: string | null): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  getGithubUrl(type: 'Backend' | 'Frontend' | 'Mobile'): string | null {
    const key = `${this.proyectId}_${type}` as keyof typeof GithubUrlProyects;
    return GithubUrlProyects[key] || null;
  }

  getDocumentationUrl(tech: string): string {
    return documentationDirection[tech as keyof typeof documentationDirection] || '#';
  }


}
