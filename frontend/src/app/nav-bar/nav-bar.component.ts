import { Component, OnInit } from '@angular/core';
import { AccountService } from '../services/account.service';
import { NavBarService } from '../services/nav-bar.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { MembersService } from '../services/members.service';
import { Member } from '../models/member';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  model: any = {}
  user: any;
  member: Member | undefined;
  picUrl: string | undefined;
  nameUser: string | undefined;

  showNavBar = true;

  constructor(public accountService: AccountService, private navBarService: NavBarService, private router: Router, private memberService: MembersService) {}

  ngOnInit(): void {
    this.getUser();
    this.getPicture();
    this.navBarService.showNavBar$.subscribe(show => {
      this.showNavBar = show;
    });
  }

  login() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.accountService.logout();
    this.router.navigate(['/']);
  }

  register() {
    this.router.navigate(['/register']);
  }

  getUser() {
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
        this.user = user;
        console.log(user);
        const name = user.username;
        this.nameUser = name;
    } else {
      console.log('No user found in local storage.');
    }
  }


  //TODO fix later
  getName() {
    const userString = localStorage.getItem('user');

    if (userString) {
      const user = JSON.parse(userString);
        this.user = user;
        const name = user.username;
        return name;
    } else {
      console.log('No user found in local storage.');
    }
  }

  home() {
    this.router.navigate(['/']);
  }

  getPicture(): void
  {
    this.memberService.getMember(this.getName()).subscribe(
      (data: Member) => {
        this.member = data;
        this.picUrl = this.member?.pictureUrl;
      },
      (error) => {
        console.log(error);
      }
    )
  }
}
