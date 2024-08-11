import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { NavBarService } from '../services/nav-bar.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  model: any = {}

  showNavBar = true;

  constructor(public accountService: AccountService, private navBarService: NavBarService, private router: Router) {}

  ngOnInit(): void {
    this.navBarService.showNavBar$.subscribe(show => {
      this.showNavBar = show;
    });
  }

  /*
  login() {
    this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
        this.loggedIn = true;
      },
      error: error => console.log(error)
    })
  }
    */

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.accountService.logout();
  }

  register() {
    this.router.navigate(['/register']);
  }
}
