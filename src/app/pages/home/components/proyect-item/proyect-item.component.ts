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
  @Input() tecnologias: string[] = [];
  @Input() githubUrlFrontend?: string;
  @Input() githubUrlBackend?: string;

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

  openGithubUrl(url: string): void {
    if (url) {
      window.open(url, '_blank');
    }
  }

  openTechDocs(tech: string): void {
    const techUrls: { [key: string]: string } = {
      'React': 'https://react.dev/',
      'Node.js': 'https://nodejs.org/docs/',
      'MongoDB': 'https://www.mongodb.com/docs/',
      'Angular': 'https://angular.io/docs',
      'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      'TypeScript': 'https://www.typescriptlang.org/docs/',
      'Next.js': 'https://nextjs.org/docs',
      'Vue.js': 'https://vuejs.org/guide/',
      'Python': 'https://docs.python.org/',
      'Express.js': 'https://expressjs.com/',
      'Tailwind CSS': 'https://tailwindcss.com/docs',
      'CSS3': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      'HTML5': 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      'Kotlin': 'https://kotlinlang.org/docs/'
    };

    const url = techUrls[tech];
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
