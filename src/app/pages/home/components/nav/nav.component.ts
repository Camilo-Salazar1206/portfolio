import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ViewportScroller } from '@angular/common';
import { NumbersEnum, RoutesEnum } from 'src/app/core/enums/routes.enums';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {
  routes = RoutesEnum;
  numbers = NumbersEnum;
  routeValues: { id: string, translation: string }[] = [];
  isScrolled = false;
  isMenuOpen = false;
  startX: number = 0;

  private subscription: Subscription = new Subscription();

  constructor(
    private viewportScroller: ViewportScroller,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.loadRoutes();
    
    // Subscribe to language changes
    this.subscription = this.translate.onLangChange.subscribe(() => {
      this.loadRoutes();
    });

    // Scroll event listener
    window.addEventListener('scroll', this.onScroll.bind(this));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    window.removeEventListener('scroll', this.onScroll.bind(this));
  }

  private loadRoutes() {
    const routeKeys = Object.values(RoutesEnum);
    const translationKeys = routeKeys.map(route => `navigation.${route.toLowerCase()}`);
    
    this.routeValues = routeKeys.map((route, index) => ({
      id: route,
      translation: this.translate.instant(translationKeys[index])
    }));
  }

  onScroll() {
    this.isScrolled = window.scrollY > this.numbers.ScrollThreshold;
  }

  @HostListener('document:click', ['$event'])
  closeMenuOnClickOutside(event: MouseEvent) {
    const menu = document.querySelector('.side-menu');
    const toggleButton = document.querySelector('.navbar__toggle');
    const clickedInsideMenu = menu?.contains(event.target as Node);
    const clickedInsideToggle = toggleButton?.contains(event.target as Node);

    if (!clickedInsideMenu && !clickedInsideToggle && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardNavigation(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isMenuOpen) {
      this.isMenuOpen = false;
      event.preventDefault();
    }
  }

  @HostListener('document:touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    const menu = document.querySelector('.side-menu');
    if (menu && menu.contains(event.target as Node)) {
      this.startX = event.touches[0].clientX;
    }
  }

  @HostListener('document:touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    const menu = document.querySelector('.side-menu');
    const endX = event.changedTouches[0].clientX;

    if (this.startX - endX > this.numbers.TouchMoveThreshold && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  scrollToElement(event: Event, elementId: string): void {
    event.preventDefault();
    const element = document.getElementById(elementId);
    if (!element) return;

    // Close mobile menu immediately when clicking a link
    if (this.isMenuOpen) {
      this.isMenuOpen = false;
    }

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
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
