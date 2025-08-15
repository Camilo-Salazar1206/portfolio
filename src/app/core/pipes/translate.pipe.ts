import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform, OnDestroy {
  private subscription: Subscription = new Subscription();

  constructor(private languageService: LanguageService) {
    // Subscribe to language changes to trigger pipe updates
    this.subscription.add(
      this.languageService.currentLanguage$.subscribe(() => {
        // This will trigger the pipe to re-evaluate
      })
    );
  }

  transform(key: string): string {
    return this.languageService.getTranslation(key);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
