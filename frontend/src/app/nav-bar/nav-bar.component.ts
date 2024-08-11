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
  user: any;

  showNavBar = true;

  constructor(public accountService: AccountService, private navBarService: NavBarService, private router: Router) {}

  ngOnInit(): void {
    this.navBarService.showNavBar$.subscribe(show => {
      this.showNavBar = show;
    });
    this.getUser();
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.accountService.logout();
  }

  register() {
    this.router.navigate(['/register']);
  }

  getUser() {
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
        this.user = user;
    } else {
      console.log('No user found in local storage.');
    }
  }
}
