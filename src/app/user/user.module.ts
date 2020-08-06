import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { FavouritsComponent } from './favourits/favourits.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [RegisterComponent,SearchComponent,FavouritsComponent,CartComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
