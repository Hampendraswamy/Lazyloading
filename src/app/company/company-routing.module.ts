import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsComponent } from '../product/details/details.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { SellerdetailsComponent } from './sellerdetails/sellerdetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { CompanyComponent } from './company.component';


const routes: Routes = [
  {path:"company",component:CompanyComponent,
  children:[
  {path:"details",component:DetailsComponent},
  {path:"productdetails",component:ProductdetailsComponent},
  {path:"sellerdetails",component:SellerdetailsComponent},
  {path:"userdetails",component:UserdetailsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
