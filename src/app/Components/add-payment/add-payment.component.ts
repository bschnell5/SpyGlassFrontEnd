import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/Service/goal.service';
import { PaymentService } from 'src/app/Service/payment.service';
import { Goals, GoalsComponent } from '../goals/goals.component';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {

  goals: Goals[] = [];

  payment = {
    depositamt: null,
    startdate: '',
    depositfreq: '',
    goalid: null
  };
  submitted = false;

  constructor(private paymentService: PaymentService,
              private goalService: GoalService) { }

  ngOnInit(): void {
    this.retrieveGoals();
  }

  savePayment(): void {
    const data = {
      depositamt: this.payment.depositamt,
      startdate: this.payment.startdate,
      depositfreq: this.payment.depositfreq,
      goalid: this.payment.goalid
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

        this.newPayment();
  }

  newPayment(): void {
    this.submitted = false;
    this.payment = {
      depositamt: null,
      startdate: '',
      depositfreq: '',
      goalid: null
    };
  }

  // get all goals
  retrieveGoals(): void {
    this.goalService.getAll()
      .subscribe(data => {
        console.log(data);
        this.goals = data;
      },
      error => {
        console.log(error);
      });
  }

}
