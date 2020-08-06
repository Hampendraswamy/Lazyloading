import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { DetailsComponent } from '../company/details/details.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { StatusComponent } from './status/status.component';
import { ProductComponent } from './product.component';


const routes: Routes = [
  {path:"product",component:ProductComponent,
  children:[
  {path:"address",component:AddressComponent},
  {path:"details",component:DetailsComponent},
  {path:"lifecycle",component:LifecycleComponent},
  {path:"status",component:StatusComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
