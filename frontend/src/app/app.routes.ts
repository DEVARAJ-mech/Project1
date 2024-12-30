import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { OffersComponent } from './offers/offers.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: '/categories', pathMatch: 'full' },
  { path: 'categories', component: CategoriesComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
