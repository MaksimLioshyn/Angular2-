import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminProductListComponent} from './admin-product-list/admin-product-list.component';
import {AdminProductFormComponent} from './admin-product-form/admin-product-form.component';
import {AdminGuard} from '../core/guard/admin.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: AdminProductListComponent
      },
      {
        path: 'edit/:id',
        component: AdminProductFormComponent,
      },
    ]
  },


];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
