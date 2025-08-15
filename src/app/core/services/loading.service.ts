import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  public isLoading$ = this.isLoadingSubject.asObservable();

  setLoading(loading: boolean) {
    this.isLoadingSubject.next(loading);
  }

  showLoadingFor(duration: number = 800) {
    this.setLoading(true);
    setTimeout(() => {
      this.setLoading(false);
    }, duration);
  }
}
