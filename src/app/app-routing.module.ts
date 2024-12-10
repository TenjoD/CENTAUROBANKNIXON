import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginUserComponent } from './pages/login-user/login-user.component';
import { HomeComponent } from './pages/home/home.component';
import { ManageProductsComponent } from './pages/manage-products/manage-products.component';
import { RequestProductsComponent } from './pages/request-products/request-products.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { UsersComponent } from './pages/users/users.component';
import { MovementsComponent } from './pages/movements/movements.component';
import { ManageUsersComponent } from './pages/manage-users/manage-users.component';
import { RequestListComponent } from './pages/request-list/request-list.component';
import { ProductsComponent } from './pages/products/products.component';
import { ControlPanelComponent } from './pages/control-panel/control-panel.component';
import { RequestShippingComponent } from './pages/request-shipping/request-shipping.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "loginUser",
    component: LoginUserComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "manageProduct",
    component: ManageProductsComponent
  },
  {
    path: "requestProduct",
    component: RequestProductsComponent
  },
  {
    path: "contactUs",
    component: ContactUsComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  { 
    path: "forgotPassword",
    component: ForgotPasswordComponent
  },
  {
    path: "users",
    component: UsersComponent
  },
  {
    path: "movements",
    component: MovementsComponent
  },
  {
    path: "manage-users",
    component: ManageUsersComponent
  },
  {
    path: "requests",
    component: RequestListComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path : "panelAdmin",
    component : ControlPanelComponent
  },
  {
    path : "requestShipping",
    component : RequestShippingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
