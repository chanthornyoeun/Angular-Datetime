import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from './order.service';
import { RouterModule } from '@angular/router';
import { orderRoutingConfig } from './order-routing';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    OrderListComponent,
    OrderDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule.forChild(orderRoutingConfig)
  ],
  providers: [
    OrderService
  ]
})
export class OrderModule { }
