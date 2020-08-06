import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { FavouritsComponent } from './favourits/favourits.component';
import { RegisterComponent } from './register/register.component';
import { StatusComponent } from '../product/status/status.component';


const routes: Routes = [
  {path:"cart",component:CartComponent},
  {path:"favourits",component:FavouritsComponent},
  {path:"register",component:RegisterComponent},
  {path:"search",component:StatusComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
