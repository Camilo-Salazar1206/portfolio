import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '../../../core/services/loading.service';
import { Subscription } from 'rxjs';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({opacity: 1})),
      transition(':enter', [
        style({opacity: 0, transform: 'scale(0.95)'}),
        animate('300ms ease-in-out', style({opacity: 1, transform: 'scale(1)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({opacity: 0, transform: 'scale(0.95)'}))
      ])
    ])
  ]
})
export class LoadingOverlayComponent implements OnInit, OnDestroy {
  isLoading = false;
  private subscription: Subscription = new Subscription();

  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    this.subscription.add(
      this.loadingService.isLoading$.subscribe(loading => {
        this.isLoading = loading;
      })
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
