import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    standalone: false
})
export class HomeComponent {

    constructor( private router:Router){
    }

    showAlert() {
        alert('En producción');
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
