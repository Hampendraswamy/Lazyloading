import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { StatusComponent } from './status/status.component';
import { AddressComponent } from './address/address.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [LifecycleComponent, StatusComponent, AddressComponent, DetailsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
