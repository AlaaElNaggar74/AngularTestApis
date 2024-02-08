import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './api/home/home.component';
import { LandingComponent } from './api/landing/landing.component';
import { ErrorsComponent } from './api/errors/errors.component';
import { ProductsComponent } from './api/products/products.component';
import { CategoriesComponent } from './api/categories/categories.component';
import { ProdetailsComponent } from './api/prodetails/prodetails.component';
import { CatdetailsComponent } from './api/catdetails/catdetails.component';
import { HomegrouprouteComponent } from './api/homegrouproute/homegrouproute.component';
import { LoginComponent } from './api/login/login.component';
import { OutputapistestComponent } from './api/outputapistest/outputapistest.component';
import { RegisterComponent } from './api/register/register.component';
import { ForgotpasswordComponent } from './api/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './api/dashboard/dashboard.component';
import { CartComponent } from './api/cart/cart.component';
import { ProductcreateComponent } from './api/productcreate/productcreate.component';
import { CategorycreateComponent } from './api/categorycreate/categorycreate.component';
import { ProducteditComponent } from './api/productedit/productedit.component';
import { CategoryeditComponent } from './api/categoryedit/categoryedit.component';
import { RevhomeComponent } from './revesion/revhome/revhome.component';
import { RevcardComponent } from './revesion/revcard/revcard.component';
import { RevlandComponent } from './revesion/revland/revland.component';
import { JsonserverTestComponent } from './revesion/jsonserver-test/jsonserver-test.component';
import { MainProjectComponent } from './smallProject/main-project/main-project.component';
import { HomeeProComponent } from './smallProject/main-project/homee-pro/homee-pro.component';
import { SmProsComponent } from './smallProject/main-project/sm-pros/sm-pros.component';
import { SmCatsComponent } from './smallProject/main-project/sm-cats/sm-cats.component';
import { SmAdmiComponent } from './smallProject/main-project/sm-admi/sm-admi.component';
import { ListOneComponent } from './smallProject/main-project/aside-pro/lists/list-one/list-one.component';
import { ListTwoComponent } from './smallProject/main-project/aside-pro/lists/list-two/list-two.component';
import { ListThreeComponent } from './smallProject/main-project/aside-pro/lists/list-three/list-three.component';
import { ListFourComponent } from './smallProject/main-project/aside-pro/lists/list-four/list-four.component';
import { ListFiveComponent } from './smallProject/main-project/aside-pro/lists/list-five/list-five.component';
import { SmProdListComponent } from './smallProject/main-project/sm-products-services/sm-prod-list/sm-prod-list.component';
import { SmProductsServicesComponent } from './smallProject/main-project/sm-products-services/sm-products-services.component';
import { ProsDetilsComponent } from './smallProject/main-project/pros-detils/pros-detils.component';
import { PromotionComponent } from './smallProject/main-project/promotion/promotion.component';
import { TestObservService } from './smallProject/main-project/test-observale/testServices/test-observ.service';
import { TestObservaleComponent } from './smallProject/main-project/test-observale/test-observale.component';
import { authGaurdGuard } from './smallProject/main-project/test-observale/gaurds/auth-gaurd.guard';

import { MainProGaurdComponent } from './proWirhGaurd/main-pro-gaurd/main-pro-gaurd.component';
import { HomeComponentt } from './proWirhGaurd/home/home.component';
import { LoginGaurdComponent } from './proWirhGaurd/login/login.component';
import { ProductsGaurdComponent } from './proWirhGaurd/products/products.component';
import { CategoriesGaurdComponent } from './proWirhGaurd/categories/categories.component';
import { UsersComponent } from './proWirhGaurd/users/users.component';
import { UserlandComponent } from './proWirhGaurd/userland/userland.component';
import { UserPageComponent } from './proWirhGaurd/user-page/user-page.component';
import { AdminComponent } from './proWirhGaurd/admin/admin.component';
import { AddCardGaurdComponent } from './proWirhGaurd/add-card/add-card.component';
import { AdminTableComponent } from './proWirhGaurd/admin-table/admin-table.component';
import { AdminPorsComponent } from './proWirhGaurd/admin-pors/admin-pors.component';
import { SecHomePageComponent } from './proWirhGaurd/sec-home-page/sec-home-page.component';
import { VipComponent } from './proWirhGaurd/vip/vip.component';
import { authLoginGuard } from './proWirhGaurd/services/gaurd/auth-login.guard';
import { RegisterGaurdComponent } from './proWirhGaurd/register-gaurd/register-gaurd.component';
import { isLogginGuard } from './proWirhGaurd/services/gaurd/is-loggin.guard';
import { userGaurdGuard } from './proWirhGaurd/services/gaurd/user-gaurd.guard';
import { UserNotAuthComponent } from './proWirhGaurd/user-not-auth/user-not-auth.component';
import { AdminNotAuthComponent } from './proWirhGaurd/admin-not-auth/admin-not-auth.component';
import { adminGaurdGuard } from './proWirhGaurd/services/gaurd/admin-gaurd.guard';
import { AdminCreateProComponent } from './proWirhGaurd/admin-create-pro/admin-create-pro.component';
import { AdminEditProComponent } from './proWirhGaurd/admin-edit-pro/admin-edit-pro.component';
import { AdminViewDetailsProComponent } from './proWirhGaurd/admin-view-details-pro/admin-view-details-pro.component';
import { TemplatefromComponent } from './proWirhGaurd/formsType/tempateForms/templatefrom/templatefrom.component';
import { ReactiveFormComponent } from './proWirhGaurd/formsType/reactiveForm/reactive-form/reactive-form.component';
import { AddressWithManyFieldComponent } from './proWirhGaurd/formsType/address-with-many-field/address-with-many-field.component';
import { ManyCheckBoxsComponent } from './proWirhGaurd/formsType/many-check-boxs/many-check-boxs.component';
import { RadioBoxComponent } from './proWirhGaurd/formsType/radio-box/radio-box.component';
import { MultiMobileComponent } from './proWirhGaurd/formsType/multi-mobile/multi-mobile.component';
import { ConfirPasswordComponent } from './proWirhGaurd/formsType/confir-password/confir-password.component';
import { TestCustomValidateComponent } from './proWirhGaurd/formsType/test-custom-validate/test-custom-validate.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '', // Default Path
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomegrouprouteComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        title: 'Home',
        component: HomeComponent,
      },
      {
        path: 'landing',
        title: 'Landing',
        component: LandingComponent,
      },
      {
        path: 'products',
        title: 'Products',
        component: ProductsComponent,
      },
      {
        path: 'productcreate',
        title: 'Product Create',
        component: ProductcreateComponent,
      },
      // // for test
      // // angular work with [ First-Match Wins Strategy ]
      // // SO You Shoukd Write Static path like products/create/ before ---
      // // dynamic path like products/:id to get yor routes correctly
      // {
      //   path: 'products/create',
      //   title: 'Products-Details',
      //   component: ProducteditComponent,
      // },

      {
        path: 'products/:id',
        title: 'Products-Details',
        component: ProdetailsComponent,
      },

      {
        path: 'products/edit/:id',
        title: 'Products-Edit',
        component: ProducteditComponent,
      },
      {
        path: 'categories',
        title: 'Categories',
        component: CategoriesComponent,
      },
      {
        path: 'categorycreate',
        title: 'Categories Create',
        component: CategorycreateComponent,
      },
      {
        path: 'categories/:id',
        title: 'Categories-Details',
        component: CatdetailsComponent,
      },
      {
        path: 'categories/edit/:id',
        title: 'categories-Edit',
        component: CategoryeditComponent,
      },
      {
        path: 'testapi',
        title: 'Api',
        component: OutputapistestComponent,
      },
      {
        path: 'cart',
        title: 'Cart',
        component: CartComponent,
      },
    ],
  },

  {
    path: 'smallproject',
    component: MainProjectComponent,

    children: [
      {
        path: '',
        redirectTo: 'smHomePro',
        pathMatch: 'full',
      },
      {
        path: 'smHomePro',
        title: 'Home Pro',
        component: HomeeProComponent,
      },
      {
        path: 'smproducts',
        title: 'Pros Component',

        component: SmProsComponent,
      },
      {
        path: 'smproductsservices',
        title: 'Pros Component',
        component: SmProductsServicesComponent,
      },
      {
        path: 'smproductsservices/:id',
        title: 'Pros Component',
        component: ProsDetilsComponent,
      },
      {
        path: 'smprcategory',
        canActivate: [authGaurdGuard],
        title: 'Cats Component',

        component: SmCatsComponent,
      },
      {
        path: 'smprpromotion',
        title: 'Promotion Component',
        component: PromotionComponent,
      },
      {
        path: 'testobserve',
        title: 'testobserve Component',
        component: TestObservaleComponent,
      },
      {
        path: 'smadmin',
        title: 'Admi Component',
        component: SmAdmiComponent,
      },
      {
        path: 'listone',
        title: 'listone',
        component: ListOneComponent,
      },
      {
        path: 'listtwo',
        title: 'listtwo',
        component: ListTwoComponent,
      },
      {
        path: 'listthree',
        title: 'listthree',
        component: ListThreeComponent,
      },
      {
        path: 'listfour',
        title: 'listfour',
        component: ListFourComponent,
      },
      {
        path: 'listfive',
        title: 'listfive',
        component: ListFiveComponent,
      },
    ],
  },

  {
    path: 'service-gaurd',
    component: MainProGaurdComponent,
    children: [
      {
        path: '',
        component: HomeComponentt,
        children: [
          {
            path: '',
            pathMatch: 'full',
            redirectTo: 'sechome',
          },
          {
            path: 'sechome',
            title: 'sec-Home-gaurd',
            component: SecHomePageComponent,
          },
          {
            path: 'prosgaurd',
            title: 'products-gaurd',
            component: ProductsGaurdComponent,
          },
          {
            path: 'template-forms',
            title: 'Template-Forms',
            component: TemplatefromComponent,
          },
          {
            path: 'address-field',
            title: 'Address-as-form-group',
            component: AddressWithManyFieldComponent,
          },
          {
            path: 'check-box',
            title: 'check-box',
            component: ManyCheckBoxsComponent,
          },
          {
            path: 'radio-box',
            title: 'radio-box',
            component: RadioBoxComponent,
          },
          {
            path: 'mobile-multi-value',
            title: 'mobile-multi-value',
            component: MultiMobileComponent,
          },
          {
            path: 'confirm-password',
            title: 'confirm-password',
            component: ConfirPasswordComponent,
          },
          {
            path: 'custom-validators',
            title: 'custom-validators',
            component: TestCustomValidateComponent,
          },
         
          {
            path: 'prosgaurd/create',
            title: 'admins-create-gaurd',
            canActivate: [adminGaurdGuard],
            component: AdminCreateProComponent,
          },
          {
            path: 'prosgaurd/edite/:id',
            title: 'admins-edit-gaurd',
            canActivate: [adminGaurdGuard],
            component: AdminEditProComponent,
          },
          {
            path: 'prosgaurd/:id',
            title: 'Public-Details',
            component: AdminViewDetailsProComponent,
          },

          {
            path: 'categaurd',
            title: 'categories-gaurd',
            component: CategoriesGaurdComponent,
          },
          {
            path: 'user-daurd-gu',
            title: 'usersone-gaurd',
            canActivate: [userGaurdGuard],
            component: UsersComponent,
          },
          {
            path: 'userland-gu',
            title: 'usersLand-gaurd',
            canActivate: [userGaurdGuard],
            component: UserlandComponent,
          },
          {
            path: 'userpage-gu',
            title: 'usersPage-gaurd',
            canActivate: [userGaurdGuard],
            component: UserPageComponent,
          },
          {
            path: 'user-not-autharized',
            title: 'user-not-autharized',
            component: UserNotAuthComponent,
          },

          {
            path: 'admins-gu',
            title: 'admins-gaurd',
            canActivate: [adminGaurdGuard],
            component: AdminComponent,
          },
          {
            path: 'adminstable-gu',
            title: 'adminsTablee-gaurd',
            canActivate: [adminGaurdGuard],
            component: AdminTableComponent,
          },
          {
            path: 'adminspros-gu',
            title: 'adminsProd-gaurd',
            canActivate: [adminGaurdGuard],
            component: AdminPorsComponent,
          },
          {
            path: 'admin-not-autharized',
            title: 'admin-not-autharized',

            component: AdminNotAuthComponent,
          },
          {
            path: 'addGaurdCard-gu',
            title: 'Add-To-Card-gaurd',
            component: AddCardGaurdComponent,
          },

          {
            path: 'vip-gu',
            title: 'VIP-gaurd',
            canActivate: [authLoginGuard],
            component: VipComponent,
          },
          {
            path: 'loogaurd',
            title: 'Login-Gaurd',
            canActivate: [isLogginGuard],
            component: LoginGaurdComponent,
          },
          {
            path: 'registerGaurd',
            title: 'Register-Gaurd',
            component: RegisterGaurdComponent,
          },
        ],
      },
      // {
      //   path: 'loogaurd',
      //   title: 'Login-Gaurd',
      //   component: LoginGaurdComponent,
      // },
    ],
  },
  {
    path: 'revisonwebsite',
    title: 'revison',
    component: RevhomeComponent,
  },
  {
    path: 'revisonwebsitecard',
    title: 'revison card',
    component: RevcardComponent,
  },
  {
    path: 'revisonwebsiteland',
    title: 'revison Land',
    component: RevlandComponent,
  },
  {
    path: 'json-server',
    title: 'json-server',
    component: JsonserverTestComponent,
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    component: DashboardComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'register-emp',
    title: 'Register',
    component: RegisterComponent,
  },
  {
    path: 'forgotpassword',
    title: 'Forgot Password',
    component: ForgotpasswordComponent,
  },

  {
    path: '**',
    component: ErrorsComponent, // Wild Card Path
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
