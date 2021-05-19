import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/Service/payment.service';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.scss']
})
export class EditPaymentComponent implements OnInit {

  currentPayment = null;
  message = '';

  constructor(private paymentService: PaymentService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getPayment(this.route.snapshot.paramMap.get('id'));
  }

  getPayment(id): void {
    this.paymentService.get(id).subscribe(data => {
      console.log("getPayment", data);
      this.currentPayment = data;
      console.log("currentPayment", this.currentPayment)
    },
    error => {
      console.log(error);
    })
  }

  updatePayment(): void {
    this.paymentService.update(this.currentPayment.paymentid, this.currentPayment)
      .subscribe(response => {
        console.log("response", response); 
        this.message = 'The payment was updated successfully!';
      },
      error => {
        console.log(error);
      });
  }

  updateActive(status): void {
    const data = {
      paymentid: this.currentPayment.paymentid,
      goal: this.currentPayment.goal,
      user: this.currentPayment.user,
      depositamt: this.currentPayment.depositamt,
      startdate: this.currentPayment.startdate,
      depositfreq: this.currentPayment.depositfreq,
      active: status
    };
    
    this.paymentService.update(this.currentPayment.paymentid, data)
      .subscribe(response => {
        console.log(response);
        this.currentPayment.active = status;
      },
      error => {
        console.log(error);
      });
    }

}
