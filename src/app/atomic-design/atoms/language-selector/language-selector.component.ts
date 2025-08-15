import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LoadingService } from 'src/app/core/services/loading.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss']
})
export class LanguageSelectorComponent implements OnInit {

  languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  currentLanguage = 'es';
  isDropdownOpen = false;

  constructor(
    private translate: TranslateService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.currentLanguage = this.translate.currentLang || this.translate.defaultLang || 'es';
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(languageCode: string) {
    if (languageCode !== this.currentLanguage) {
      this.loadingService.setLoading(true);
      
      this.translate.use(languageCode).subscribe(() => {
        this.currentLanguage = languageCode;
        
        setTimeout(() => {
          this.loadingService.setLoading(false);
        }, 600);
      });
    }
    this.isDropdownOpen = false;
  }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.language-selector')) {
      this.closeDropdown();
    }
  }

  getCurrentLanguage() {
    return this.languages.find(lang => lang.code === this.currentLanguage);
  }
}
