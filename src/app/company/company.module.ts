import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SellerdetailsComponent } from './sellerdetails/sellerdetails.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [UserdetailsComponent, SellerdetailsComponent, ProductdetailsComponent, DetailsComponent],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
