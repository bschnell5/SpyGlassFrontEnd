import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/Service/payment.service';
import { GoalService } from 'src/app/Service/goal.service';
import { Goal } from '../../goals/goals.component';
// import { Goal } from 'src/app/Models/goal';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {

  goals: Goal[] = [];

  payment = {
    depositamt: null,
    startdate: '',
    depositfreq: '',
    active: true,
    goal:  {
      goalid: null,
      name: '',
      description: '',
      startdate: '',
      targetdate: '',
      currentsaving: null,
      targetdollar: null,
      active: true
    }
  
  };
  

  submitted = false;

  constructor(private paymentService: PaymentService, private goalService: GoalService) { }

  ngOnInit(): void {
    this.retrieveGoals();
    console.log("goals array", this.goals);
  }

  savePayment(): void {
    const data = {
      depositamt: this.payment.depositamt,
      startdate: this.payment.startdate,
      depositfreq: this.payment.depositfreq,
      active: this.payment.active,
      goal: this.payment.goal
    };
  

    console.log("payment data", data);

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
      active: true,
      goal: {
        goalid: null,
        name: '',
        description: '',
        startdate: '',
        targetdate: '',
        currentsaving: null,
        targetdollar: null,
        active: true
      }
    };
  }

  retrieveGoals(): void {
    this.goalService.getAll()
      .subscribe(data => {
        console.log("retrieve goals data, add-payment", data);
        this.goals = data;
      },
      error => {
        console.log(error);
      });
  }
}
