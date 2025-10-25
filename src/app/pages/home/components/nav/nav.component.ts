  import { Component } from '@angular/core';
  import { TranslateService } from '@ngx-translate/core';

  @Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
  })
  export class NavComponent {
    isMenuOpen = false;

    constructor(private translate: TranslateService) {}

    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }

    scrollToSection(event: Event, sectionId: string) {
      event.preventDefault();
      const element = document.getElementById(sectionId);
      if (!element) return;

      // Cerrar el menú
      this.isMenuOpen = false;

      // Obtener la posición del elemento
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px de offset para el navbar

      // Scroll suave personalizado con animación
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;
      const duration = 1000; // duración en ms
      let start: number | null = null;

      function animation(currentTime: number) {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      function ease(t: number, b: number, c: number, d: number) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animation);
    }
  }
