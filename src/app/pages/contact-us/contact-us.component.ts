import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-contact-us',
    templateUrl: './contact-us.component.html',
    styleUrls: ['./contact-us.component.css'],
    standalone: false
})
export class ContactUsComponent {
    constructor(private router : Router,
      private translate: TranslateService
    ){}

    goHome() {
        this.router.navigate(["home"]);
      }

    goContact() {
     this.router.navigate(["contactUs"]);
     }

    goProducts() {
    this.router.navigate(["products"]);
     }

     showAlert() {
      const alertMessage = this.translate.instant('ALERT_IN_PRODUCTION');
      alert(alertMessage);
        }
}
