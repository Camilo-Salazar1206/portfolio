import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate, sequence } from '@angular/animations';

@Component({
  selector: 'app-initial-loader',
  templateUrl: './initial-loader.component.html',
  styleUrls: ['./initial-loader.component.scss'],
  animations: [
    trigger('textAnimation', [
      state('welcome', style({
        opacity: 1,
        transform: 'translateY(0) scale(1)'
      })),
      state('name', style({
        opacity: 1,
        transform: 'translateY(0) scale(1.2)'
      })),
      state('fadeOut', style({
        opacity: 0,
        transform: 'translateY(-20px) scale(0.8)'
      })),
      transition('* => welcome', [
        style({ opacity: 0, transform: 'translateY(30px) scale(0.8)' }),
        animate('800ms ease-out')
      ]),
      transition('welcome => name', [
        animate('600ms ease-in-out')
      ]),
      transition('name => fadeOut', [
        animate('800ms ease-in')
      ])
    ]),
    trigger('containerFade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('500ms ease-in'))
    ])
  ]
})
export class InitialLoaderComponent implements OnInit {
  @Output() loadingComplete = new EventEmitter<void>();

  animationState = 'welcome';
  containerState = 'visible';
  showWelcome = true;
  showName = false;

  ngOnInit() {
    this.startAnimation();
  }

  private startAnimation() {
    // Show welcome text first
    setTimeout(() => {
      this.showWelcome = false;
      this.showName = true;
      this.animationState = 'name';
    }, 1500);

    // Fade out name and complete loading
    setTimeout(() => {
      this.animationState = 'fadeOut';
    }, 3000);

    // Hide container and emit completion
    setTimeout(() => {
      this.containerState = 'hidden';
    }, 3500);

    setTimeout(() => {
      this.loadingComplete.emit();
    }, 4000);
  }
}
