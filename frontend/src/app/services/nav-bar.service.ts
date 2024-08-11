import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  private showNavBarSubject = new BehaviorSubject<boolean>(true);
  showNavBar$ = this.showNavBarSubject.asObservable();

  setShowNavBar(show: boolean): void {
    this.showNavBarSubject.next(show);
  }
}
