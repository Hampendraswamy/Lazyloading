import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import {AdminModule} from './admin/admin.module';
import { CompanyModule } from './company/company.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin.component';
import { CompanyComponent } from './company/company.component';
import { ProductComponent } from './product/product.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"admin",component:AdminComponent},
  {path:"company",component:CompanyComponent},
  {path:"product",component:ProductComponent},
  {path:"user",component:UserComponent},
  {path:"admin",loadChildren:'./admin/admin.module#AdminModule'},
  {path:"company",loadChildren:'./company/company.module#CompanyModule'},
  {path:"product",loadChildren:'./product/product.module#ProductModule'},
  {path:"user",loadChildren:'./user/user.module#UserModule'},
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [AdminModule,CompanyModule,ProductModule,UserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

