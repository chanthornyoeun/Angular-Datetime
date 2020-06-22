import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  orderForm: FormGroup;
  private _id: number;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this._id = this.activatedRoute.snapshot.params['id'];

    this.orderForm = this.fb.group({
      orderDate: [new Date(), Validators.required],
      orderDateTime: [new Date(), Validators.required]
    });
  }

  onSubmit() {
    if (this.orderForm.valid) {
      const value = this.orderForm.value;
      if (this._id) {
        this.onUpdate(this._id, value);
      } else {
        this.onSave(value);
      }
    }
  }

  private onSave(value: any) {
    this.orderService.save(value).subscribe(res => {
      console.log(res);
      this.navigateToList();
    });
  }

  private onUpdate(id: number, value: any) {
    this.orderService.update(id, value).subscribe(res => {
      console.log(res);
      this.navigateToList();
    });
  }

  public navigateToList() {
    this.router.navigate(['/order']);
  }
}
