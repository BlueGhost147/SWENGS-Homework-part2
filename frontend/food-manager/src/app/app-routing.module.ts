import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductformComponent} from "./productform/productform.component";
import {LoginComponent} from "./login/login.component";
import {ProductlistComponent} from "./productlist/productlist.component";
import {WarehouseOptionsResolver} from "./resolver/warehouse-options.resolver";
import {ProducerOptionsResolver} from "./resolver/producer-options.resolver";
import {StorageOptionsResolver} from "./resolver/storage-options-resolver";
import {AuthGuard} from "./auth.guard";
import {WarehouselistComponent} from "./warehouselist/warehouselist.component";
import {WarehouseformComponent} from "./warehouseform/warehouseform.component";


const routes: Routes = [
  {path: '', redirectTo: '/productlist', pathMatch: 'full'},
  {path: 'productlist', component: ProductlistComponent, canActivate: [AuthGuard]},
  {path: 'productform/:id', component: ProductformComponent,
    canActivate: [AuthGuard],
    resolve: {
      warehouseOptions: WarehouseOptionsResolver,
      producerOptions: ProducerOptionsResolver,
      storageOptions: StorageOptionsResolver,
    }},
  {path: 'productform', component: ProductformComponent, canActivate: [AuthGuard],
    resolve: {
      warehouseOptions: WarehouseOptionsResolver,
      producerOptions: ProducerOptionsResolver,
      storageOptions: StorageOptionsResolver,
    }},
  {path: 'warehouselist', component: WarehouselistComponent, canActivate: [AuthGuard]},
  {path: 'warehouseform/:id', component: WarehouseformComponent, canActivate: [AuthGuard]},
  {path: 'warehouseform', component: WarehouseformComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
