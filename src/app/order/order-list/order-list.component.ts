import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: any[];

  constructor(private orderService: OrderService) {
    this.orders = [];
  }

  ngOnInit() {
    this.getAllOrder();
  }

  private getAllOrder() {
    this.orderService.list().subscribe(res => {
      this.orders = res['data'];
    });
  }

  deleteOrder(id: number) {
    this.orderService.delete(id).subscribe(res => {
      console.log('Delete order id ', id);
      this.getAllOrder();
    });
  }

}
