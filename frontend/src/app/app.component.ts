import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Route, Router } from '@angular/router';
import { NavBarService } from './services/nav-bar.service';
import { filter } from 'rxjs';
import { AccountService } from './services/account.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  //...........
  showNavBar = true;


  title = 'Media';

  constructor(private http: HttpClient, private router: Router, private navBarService: NavBarService, private accoountService: AccountService) {}


  ngOnInit(): void {
    this.setCurrentUSer();

    //::::::
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // Adjust this condition based on your route names or paths
      this.showNavBar = !this.router.url.includes('/registerr');
      this.navBarService.setShowNavBar(this.showNavBar);
    });
  }

  setCurrentUSer() {
    const userString = localStorage.getItem('user');
    if(!userString) return;
    const user: User = JSON.parse(userString);
    this.accoountService.setCurrentUser(user);
  }



  goToRegister(): void{
    console.log("Routing starts");
    this.router.navigate(['/register']);
    console.log("Routing has finished");
  }




}
