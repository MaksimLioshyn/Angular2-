import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '../shared/shared.module';
import { OrderFormComponent } from './order-form/order-form.component';
import { ProcessOrderComponent } from './process-order/process-order.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule

  ],
  declarations: [
    OrderFormComponent,
    ProcessOrderComponent
  ]

})
export class OrderModule { }
