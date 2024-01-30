import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularMaterialModule } from './material.module'; // material module imported

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './api/home/home.component';
import { LandingComponent } from './api/landing/landing.component';
import { NavbarComponent } from './api/navbar/navbar.component';
import { ErrorsComponent } from './api/errors/errors.component';
import { ProductsComponent } from './api/products/products.component';
import { CategoriesComponent } from './api/categories/categories.component';
import { FooterComponent } from './api/footer/footer.component';
import { ProdetailsComponent } from './api/prodetails/prodetails.component';
import { CatdetailsComponent } from './api/catdetails/catdetails.component';
import { HomegrouprouteComponent } from './api/homegrouproute/homegrouproute.component';
import { LoginComponent } from './api/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { OutputapistestComponent } from './api/outputapistest/outputapistest.component';
import { RegisterComponent } from './api/register/register.component';
import { ForgotpasswordComponent } from './api/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './api/dashboard/dashboard.component';
import { CartComponent } from './api/cart/cart.component';
import { ProductcreateComponent } from './api/productcreate/productcreate.component';
import { ProducteditComponent } from './api/productedit/productedit.component';
import { CategoryeditComponent } from './api/categoryedit/categoryedit.component';
import { CategorycreateComponent } from './api/categorycreate/categorycreate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RevhomeComponent } from './revesion/revhome/revhome.component';
import { RevcardComponent } from './revesion/revcard/revcard.component';
import { RevlandComponent } from './revesion/revland/revland.component';
import { JsonserverTestComponent } from './revesion/jsonserver-test/jsonserver-test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SmproComponent } from './revesion/revcard/smpro/smpro.component';

import { FormsModule } from '@angular/forms';
import { MainProjectComponent } from './smallProject/main-project/main-project.component';
import { NavProComponent } from './smallProject/main-project/nav-pro/nav-pro.component';
import { AsideProComponent } from './smallProject/main-project/aside-pro/aside-pro.component';
import { HomeeProComponent } from './smallProject/main-project/homee-pro/homee-pro.component';
import { SmProsComponent } from './smallProject/main-project/sm-pros/sm-pros.component';
import { SmCatsComponent } from './smallProject/main-project/sm-cats/sm-cats.component';
import { SmAdmiComponent } from './smallProject/main-project/sm-admi/sm-admi.component';
import { ListOneComponent } from './smallProject/main-project/aside-pro/lists/list-one/list-one.component';
import { ListTwoComponent } from './smallProject/main-project/aside-pro/lists/list-two/list-two.component';
import { ListThreeComponent } from './smallProject/main-project/aside-pro/lists/list-three/list-three.component';
import { ListFourComponent } from './smallProject/main-project/aside-pro/lists/list-four/list-four.component';
import { ListFiveComponent } from './smallProject/main-project/aside-pro/lists/list-five/list-five.component';
import { LightBoxDirective } from './smallProject/directive/light-box.directive';
import { EgyCurrencyPipe } from './smallProject/Pipes/egy-currency.pipe';
import { ListProductsComponent } from './smallProject/main-project/sm-pros/list-products/list-products.component';
import { SmProductsServicesComponent } from './smallProject/main-project/sm-products-services/sm-products-services.component';
import { SmProdListComponent } from './smallProject/main-project/sm-products-services/sm-prod-list/sm-prod-list.component';
import { ProServicesService } from './smallProject/main-project/sm-products-services/services/pro-services.service';
import { ProsDetilsComponent } from './smallProject/main-project/pros-detils/pros-detils.component';
import { PromotionComponent } from './smallProject/main-project/promotion/promotion.component';
import { PaginatorComponent } from './smallProject/main-project/promotion/paginator/paginator.component';
import { TestObservaleComponent } from './smallProject/main-project/test-observale/test-observale.component';


import { MainProGaurdComponent } from './proWirhGaurd/main-pro-gaurd/main-pro-gaurd.component';
import { HomeComponentt } from './proWirhGaurd/home/home.component';
import { NavvComponent } from './proWirhGaurd/navv/navv.component';
import { UsersComponent } from './proWirhGaurd/users/users.component';
import { AdminComponent } from './proWirhGaurd/admin/admin.component';
import {  AddCardGaurdComponent } from './proWirhGaurd/add-card/add-card.component';
import { UserPageComponent } from './proWirhGaurd/user-page/user-page.component';
import { UserlandComponent } from './proWirhGaurd/userland/userland.component';
import { AdminPorsComponent } from './proWirhGaurd/admin-pors/admin-pors.component';
import { AdminTableComponent } from './proWirhGaurd/admin-table/admin-table.component';
import { LoginGaurdComponent } from './proWirhGaurd/login/login.component';
import { ProductsGaurdComponent } from './proWirhGaurd/products/products.component';
import { CategoriesGaurdComponent } from './proWirhGaurd/categories/categories.component';
import { SecHomePageComponent } from './proWirhGaurd/sec-home-page/sec-home-page.component';
import { VipComponent } from './proWirhGaurd/vip/vip.component';
import { RegisterGaurdComponent } from './proWirhGaurd/register-gaurd/register-gaurd.component';
import { AdminNotAuthComponent } from './proWirhGaurd/admin-not-auth/admin-not-auth.component';
import { UserNotAuthComponent } from './proWirhGaurd/user-not-auth/user-not-auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    NavbarComponent,
    ErrorsComponent,
    ProductsComponent,
    CategoriesComponent,
    FooterComponent,
    ProdetailsComponent,
    CatdetailsComponent,
    HomegrouprouteComponent,
    LoginComponent,
    OutputapistestComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    CartComponent,
    ProductcreateComponent,
    ProducteditComponent,
    CategoryeditComponent,
    CategorycreateComponent,
    RevhomeComponent,
    RevcardComponent,
    RevlandComponent,
    SmproComponent,
    JsonserverTestComponent,
    MainProjectComponent,
    NavProComponent,
    AsideProComponent,
    HomeeProComponent,
    SmProsComponent,
    SmCatsComponent,
    SmAdmiComponent,
    ListOneComponent,
    ListTwoComponent,
    ListThreeComponent,
    ListFourComponent,
    ListFiveComponent,
    LightBoxDirective,
    EgyCurrencyPipe,
    ListProductsComponent,
    SmProductsServicesComponent,
    SmProdListComponent,
    ProsDetilsComponent,
    PromotionComponent,
    PaginatorComponent,
    TestObservaleComponent,


    MainProGaurdComponent,
    HomeComponentt,
    LoginGaurdComponent,
    ProductsGaurdComponent,
    CategoriesGaurdComponent,
    NavvComponent,
    UsersComponent,
    AdminComponent,
    AddCardGaurdComponent,
    UserPageComponent,
    UserlandComponent,
    AdminPorsComponent,
    AdminTableComponent,
    SecHomePageComponent,
    VipComponent,
    RegisterGaurdComponent,
    AdminNotAuthComponent,
    UserNotAuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //To Use Angular Material
    BrowserAnimationsModule,
    AngularMaterialModule,

    // To Use reactive Form
    ReactiveFormsModule,

    // To Use [(ngModel)]
    FormsModule,

    // To Use Services
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
