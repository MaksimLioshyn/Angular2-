import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CartListComponent} from './cart/cart-list/cart-list.component';
import {PathNotFoundComponent} from './shared/path-not-found/path-not-found.component';
import {LoginFormComponent} from './shared/login-form/login-form.component';
import {AdminGuard} from './core/guard/admin.guard';
import {OrderFormComponent} from './order/order-form/order-form.component';
import {ProcessOrderComponent} from './order/process-order/process-order.component';

const routes: Routes = [
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: 'products',
    loadChildren: './product/product.module#ProductModule'
  },
  {
    path: 'processorder',
    component: ProcessOrderComponent,
  },
  {
    path: 'order',
    component: OrderFormComponent,
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: './admin/admin.module#AdminModule'
  },
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PathNotFoundComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
