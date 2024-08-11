import { CanActivateFn } from '@angular/router';
import { AccountService } from '../services/account.service';
import { ToastrService } from 'ngx-toastr';
import { map, Observable } from 'rxjs';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toastr = inject(ToastrService);

  return accountService.currentUser$.pipe(
    map(user => {
      if (user) return true;
      else {
        toastr.error("You shall not pass!");
        return false;
      }
    })
  );
};
/*
export class AuthGuard implements CanActivate {
  constructor(private accountService: AccountService, private toastr: ToastrService){
    CanActivate(): Observable<boolean> {
      return this.accountService.currentUser$.pipe(
        map(user => {
          if(user) return true;
          else {
            this.toastr.error("You shall not pass!");
            return false;
          }
        })
      )
    }
  }
}
  */
