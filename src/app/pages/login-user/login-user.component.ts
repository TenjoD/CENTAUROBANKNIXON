import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { GlobalService } from 'src/app/services/global.service';
import { LanguageService } from 'src/app/services/language.service';

@Component({
    selector: 'app-login-user',
    templateUrl: './login-user.component.html',
    styleUrls: ['./login-user.component.css'],
    standalone: false
})
export class LoginUserComponent {
  loginData = {
    username: '',
    password: ''
  };

  constructor(private snackbar: MatSnackBar,
    private router: Router,
    public globalService: GlobalService,
    private translate: TranslateService
  ){}

  onSubmit(): void {
    if (this.loginData.username.trim() == "" && this.loginData.password.trim() == "") {
      this.snackbar.open(this.translate.instant('SNACKBAR.ENTER_USERNAME_PASSWORD'), 'Cerrar', {
        duration: 3000
      });
    } else if (this.loginData.username.trim() == "") {
      this.snackbar.open(this.translate.instant('SNACKBAR.ENTER_USERNAME'), 'Cerrar', {
        duration: 3000
      });
    } else if (this.loginData.password.trim() == "") {
      this.snackbar.open(this.translate.instant('SNACKBAR.ENTER_PASSWORD'), 'Cerrar', {
        duration: 3000
      });
    } else {
      this.setRole();
      this.snackbar.open(this.translate.instant('SNACKBAR.LOGIN_SUCCESSFUL'), 'Cerrar', {
        duration: 3000
      });
      if (this.globalService.getGlobalVariable() == "user-loged") {
        this.goUser();
      } else {
        this.goHome();
      }
    }
  }

  setRole(){

    let role = this.globalService.getGlobalVariable();
    if(role == "admin"){
      this.globalService.setGlobalVariable("admin-loged");
    } else {
      this.globalService.setGlobalVariable("user-loged");
    }
  }

  goHome(){
    this.router.navigate(["home"]);
  }

  goLogin(){
    this.globalService.setGlobalVariable("");
    this.router.navigate(["login"]);
  }

  goRegister(){
    this.router.navigate(["register"])
  }

  onForgotPassword() {
    this.router.navigate(["forgotPassword"])
  }
  goUser(){
    this.router.navigate(["users"])
  }
}
