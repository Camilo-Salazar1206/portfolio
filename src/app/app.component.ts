import { Component, OnInit, OnDestroy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from './core/services/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'portfolio';
  isLoading = false;
  
  private loadingSubscription: Subscription = new Subscription();

  constructor(
    private translate: TranslateService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    // Show loading on initial load/refresh
    this.isLoading = true;
    
    // Set default language
    this.translate.setDefaultLang('es');
    this.translate.use('es');
    
    // Hide loading after app initialization (longer for better UX)
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);

    // Subscribe to loading state for language changes
    this.loadingSubscription = this.loadingService.isLoading$.subscribe(
      loading => {
        if (loading) {
          this.isLoading = true;
        } else {
          // Small delay to show the animation
          setTimeout(() => {
            this.isLoading = false;
          }, 800);
        }
      }
    );
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }
}
