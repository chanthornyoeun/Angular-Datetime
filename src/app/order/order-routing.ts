import { Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

export const orderRoutingConfig: Routes = [
    {
        path: '',
        component: OrderListComponent,
        pathMatch: 'full'
      },
      {
        path: 'add',
        component: OrderDetailComponent,
        pathMatch: 'full'
      },
      {
        path: 'edit/:id',
        component: OrderDetailComponent,
        pathMatch: 'full'
      }
];