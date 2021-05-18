import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/Service/payment.service';
import { GoalService } from 'src/app/Service/goal.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {
  payment = {
    depositamt: null,
    startdate: '',
    depositfreq: '',
    active: true
  };
  

  submitted = false;

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
  }

  savePayment(): void {
    const data = {
      depositamt: this.payment.depositamt,
      startdate: this.payment.startdate,
      depositfreq: this.payment.depositfreq,
      active: this.payment.active
    };

    console.log(data);

    this.paymentService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

        this.newGoal();
  }

  newGoal(): void {
    this.submitted = false;
    this.payment = {
      depositamt: null,
      startdate: '',
      depositfreq: '',
      active: false
    };
  }
}
