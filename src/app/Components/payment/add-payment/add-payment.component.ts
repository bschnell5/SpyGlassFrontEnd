import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PaymentService } from 'src/app/Service/payment.service';
import { GoalService } from 'src/app/Service/goal.service';
// import { Goals } from '../../goals/goals.component';
import { switchMap, tap } from "rxjs/operators";
import { Goal } from '../../goals/goals.component';
// import { Goal } from 'src/app/Models/goal';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.scss']
})
export class AddPaymentComponent implements OnInit {
  minDate = new Date;
  plan = false;
  monthlyPay: number;
  today = Date.now();
  targetDatee: Date;
  startAmt: number;
  dreamAmt: number;

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
  updateSaving: number = null;
  

  submitted = false;

  @Output() valueChange = new EventEmitter<any>();

  constructor(private paymentService: PaymentService, private goalService: GoalService) { }

  ngOnInit(): void {
    this.retrieveGoals();
    console.log("goals array", this.goals);
    this.minDate = new Date();
  }

  savePayment(): void {
    const data = {
      depositamt: this.payment.depositamt,
      startdate: this.payment.startdate,
      depositfreq: this.payment.depositfreq,
      active: this.payment.active,
      goal: this.payment.goal
      
    };
    // this.updateSaving = this.payment.goal.currentsaving + this.payment.depositamt;
    // this.addToCurrentsavings();
    // console.log("event - addtocurrentsavings", this.addToCurrentsavings());
    
    console.log("payment data", data);
    this.paymentService.create(data)
      .subscribe(
        response => {
          console.log("sponse", response);
          this.submitted = true;
          // this.payment.goal.currentsaving = this.updateSaving;
          
          // data.goal.currentsaving = data.depositamt + data.goal.currentsaving;
        },
        error => {
          console.log(error);
        });

    // this.goalService.update(this.payment.goal.goalid, this.updateSaving)
    //     .subscribe(
    //       response => {
    //         console.log(response);
    //         this.payment.goal.currentsaving = this.updateSaving;
    //       },
    //       error => {
    //         console.log(error);
    //     });

    this.newPayment();    

    // const createPayment = this.paymentService.create(data);
    // createPayment.pipe(
    //   tap(response => {
    //     console.log(response);
    //     this.addToCurrentsavings();
    //   })
    // ).subscribe(
    //   response => {
    //     console.log("sponse", response);
    //     this.submitted = true;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    
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

  valueChanged() {
    let calculatePayment = this.payment.goal.currentsaving + this.payment.depositamt;
    this.valueChange.emit(calculatePayment);
  }  

  calculatePay(): void {
    this.plan = !this.plan;
    console.log("Creating plan");
    var m2 = new Date(this.targetDatee).getMonth();
    console.log(this.today);
    console.log(this.targetDatee);
    var diff = ((m2) - new Date().getMonth());
    console.log(diff);
  

    this.monthlyPay = ((this.dreamAmt) / (diff));

    // this.monthlyPay = (this.dreamAmt * 150) / (diff / this.monthlyTime);
    console.log(Number(this.monthlyPay));
  }

  resetPlan(): void{
    this.plan = null;
  }
}

