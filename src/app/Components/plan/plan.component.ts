import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/Service/payment.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnInit {

  today = Date.now();
  dayWeekly: number = 7;
  dayMonthly: number = 30;
  dayQuartly: number = 120;


  get targetdate(): Date{
    return this.paymentService.targetdate;
  }
  set targetdate(value: Date){
    this.paymentService.targetdate = value;
  }
  get depositamt(): number{
    return this.paymentService.depositamt;
  }
  set depositamt(value: number){
    this.paymentService.depositamt = value;
  }
  get depositfreq(): string{
    return this.paymentService.depositfreq;
  }
  set depositfreq(value: string){
    this.paymentService.depositfreq = value;
  }
  get monthlyPay(): number{
    return this.paymentService.monthlyPay;
  }
  set monthlyPay(value: number){
    this.paymentService.monthlyPay = value;
  }

  constructor(private paymentService: PaymentService) { }

  ngOnInit(): void {
  }

  calculateMonth(): void {
    console.log("Calculating Plan!")
    let timespan = (Number(this.targetdate) - Number(this.today));
    this.monthlyPay = this.depositamt / (timespan / this.dayMonthly);
    console.log(this.monthlyPay);
  }

}
