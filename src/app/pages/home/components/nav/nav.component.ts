import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { NumbersEnum, RoutesEnum, RouteTranslations } from 'src/app/core/enums/routes.enums';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  routes = RoutesEnum;
  numbers = NumbersEnum;
  private routeTranslations = RouteTranslations;
  isScrolled: boolean = false;
  isMenuOpen: boolean = false;
  startX: number = 0;

  constructor(private viewportScroller: ViewportScroller) {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isScrolled = window.scrollY > this.numbers.ScrollThreshold;
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: MouseEvent) {
    const menu = document.querySelector('.navbar__side-menu');
    const toggleButton = document.querySelector('.navbar__toggle');
    const clickedInsideMenu = menu?.contains(event.target as Node);
    const clickedInsideToggle = toggleButton?.contains(event.target as Node);

    if (!clickedInsideMenu && !clickedInsideToggle) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('document:touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    const menu = document.querySelector('.navbar__side-menu');
    if (menu && menu.contains(event.target as Node)) {
      this.startX = event.touches[0].clientX;
    }
  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const menu = document.querySelector('.navbar__side-menu');
    const endX = event.changedTouches[0].clientX;

    if (this.startX - endX > this.numbers.TouchMoveThreshold && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  translateRoute(route: keyof typeof RoutesEnum): string {
    return this.routeTranslations[route] || route;
  }

  routeValues = Object.keys(this.routes).map(route => ({
    key: route as keyof typeof RoutesEnum,
    translation: this.translateRoute(route as keyof typeof RoutesEnum),
    id: this.routes[route as keyof typeof RoutesEnum]
  }));

  scrollToElement(event: Event, elementId: string): void {
    event.preventDefault();
    const element = document.getElementById(elementId);
    if (!element) return;

    const offset = this.numbers.MenuOffset;
    const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = this.numbers.ScrollDuration;
    let startTime: number | null = null;

    const easeInOutQuad = (time: number, start: number, change: number, duration: number) => {
      time /= duration / 2;
      if (time < 1) return (change / 2) * time * time + start;
      time--;
      return (-change / 2) * (time * (time - 2) - 1) + start;
    };

    const animation = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsedTime = currentTime - startTime;
      const nextScrollPosition = easeInOutQuad(elapsedTime, startPosition, distance, duration);

      window.scrollTo(0, nextScrollPosition);

      if (elapsedTime < duration) {
        requestAnimationFrame(animation);
      } else {
        window.scrollTo(0, targetPosition);
      }
    };

    requestAnimationFrame(animation);
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
