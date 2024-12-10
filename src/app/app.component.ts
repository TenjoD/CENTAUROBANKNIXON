import { Component } from '@angular/core';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent {
  title = 'centauro';

  constructor(
    public globalService: GlobalService,
    private router: Router,
    public languageService: LanguageService
  ) { }

  goRequestShipping() {
    this.router.navigate(["requestShipping"]);
  }

  goControlPanel() {
    this.router.navigate(["panelAdmin"]);
  }

  userLoged(): boolean {
    return this.globalService.getGlobalVariable() === "user-loged";
  }

  adminLoged(): boolean {
    return this.globalService.getGlobalVariable() === "admin-loged";
  }

  logOut() {
    this.router.navigate(["login"]);
    this.globalService.setGlobalVariable("");
  }

  goHome() {
    this.router.navigate(["home"]);
  }

  goLogin() {
    this.router.navigate(["login"]);
  }

  goManage() {
    this.router.navigate(["manageProduct"]);
  }

  goRequest() {
    this.router.navigate(["requestProduct"]);
  }

  goContact() {
    this.router.navigate(["contactUs"]);
  }

  goRegister() {
    this.router.navigate(["register"]);
  }

  goForgotPassword() {
    this.router.navigate(["forgotPassword"]);
  }

  goUser() {
    this.router.navigate(["users"]);
  }

  goMovements() {
    this.router.navigate(["movements"]);
  }

  goManageUsers() {
    this.router.navigate(["manage-users"]);
  }

  goRequests() {
    this.router.navigate(["requests"]);
  }

  goProducts() {
    this.router.navigate(["products"]);
  }
}
