import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private currentLanguageSubject = new BehaviorSubject<string>('es');
  public currentLanguage$ = this.currentLanguageSubject.asObservable();

  private translations: { [key: string]: any } = {};
  private translationsLoaded = false;

  constructor(private http: HttpClient) {
    this.loadTranslations();
  }

  loadTranslations() {
    forkJoin({
      es: this.http.get('./assets/i18n/es.json'),
      en: this.http.get('./assets/i18n/en.json')
    }).subscribe({
      next: (data) => {
        this.translations['es'] = data.es;
        this.translations['en'] = data.en;
        this.translationsLoaded = true;
        console.log('Translations loaded successfully:', this.translations);
      },
      error: (error) => {
        console.error('Error loading translations:', error);
      }
    });
  }

  setLanguage(language: string) {
    console.log('Setting language to:', language);
    this.currentLanguageSubject.next(language);
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  getTranslation(key: string): string {
    if (!this.translationsLoaded) {
      console.log('Translations not loaded yet, returning key:', key);
      return key;
    }

    const currentLang = this.getCurrentLanguage();
    
    if (!this.translations[currentLang]) {
      console.log('No translations found for language:', currentLang);
      return key;
    }

    const keys = key.split('.');
    let translation = this.translations[currentLang];

    for (const k of keys) {
      if (translation && translation[k]) {
        translation = translation[k];
      } else {
        console.log('Translation not found for key:', key);
        return key;
      }
    }

    return translation || key;
  }
}
