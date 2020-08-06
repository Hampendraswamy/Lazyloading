import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {path:"admin",component:AdminComponent,
  children:[
  {path:"dashboard",component:DashboardComponent},
  {path:"manage-users",component:ManageUsersComponent},
  {path:"manageproducts",component:ManageproductsComponent},
  {path:"settings",component:SettingsComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }