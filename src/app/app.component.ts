import { Component, OnInit } from '@angular/core';
import { GlobalService } from './services/global.service';
import { Router } from '@angular/router';
import { LanguageService } from './services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false
})
export class AppComponent implements OnInit {
  title = 'centauro';

  constructor(
    public globalService: GlobalService,
    private router: Router,
    private translate: TranslateService,
    private snackbar: MatSnackBar
  ) {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }

  ngOnInit(): void {
    if(this.translate.currentLang == 'es'){
      const snack = this.snackbar.open('Do you want to translate this page?', 'Yes', {
        duration: 5000
      });
      snack.onAction().subscribe(() => {
        this.changeLanguage('en')
      })
    } else {
      const snack = this.snackbar.open('Do you want to translate this page?', 'Yes', {
        duration: 5000
      });
      snack.onAction().subscribe(() => {
        this.changeLanguage('es')
      })
    }
  }

  changeLanguage(lang: string){
    this.translate.use(lang)
  }

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

  goAdminProducts(){
    this.router.navigate(["adminProducts"])
  }
}
