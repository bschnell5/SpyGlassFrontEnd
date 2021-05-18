import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/Service/payment.service';

@Component({
  selector: 'app-edit-payment',
  templateUrl: './edit-payment.component.html',
  styleUrls: ['./edit-payment.component.scss']
})
export class EditPaymentComponent implements OnInit {

  today = Date.now();
  monthlyPayment: number;
  dayMonthly: number = 30;
  currentPayment = null;
  msg = '';
  currentNumber = null;
  firstOperand = null;
  operator = null;
  waitForDate = false;


  submitted = false;
  targetamt: number;
  targetDate: Date;

  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }


  ngOnInit(): void {
    this.msg = '';
    this.getPayment(this.route.snapshot.paramMap.get('id'));

  }

  public getNumber(v: number){
    console.log(v);
    if(this.waitForDate)
    {
      this.targetamt = v;
      this.waitForDate = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;

    }
  }

  getDecimal(){
    if(!this.currentNumber.includes('.')){
        this.currentNumber += '.'; 
    }
  }

  private doCalculation(op , targetDate){
    switch (op){
      case '+':
       let timespan = (Number(this.targetDate) - (this.today));
      case '=':
      this.monthlyPayment = this.targetamt / (timespan / this.dayMonthly);
    }
  }

  public getOperation(op: string){
    console.log(op);

    if(this.firstOperand === null){
      this.firstOperand = Number(this.currentNumber);

    }else if(this.operator){
      const result = this.doCalculation(this.today , (this.targetDate))
      this.currentNumber = String(result);
      this.firstOperand = result;
    }
    this.operator = op;
    this.waitForDate = true;

    console.log(this.firstOperand);

  }

  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = null;
    this.waitForDate = false;
  }



  getPayment(paymentid): void {
    this.paymentService.get(paymentid)
    .subscribe(
      data => {
        this.currentPayment = data;
        console.log(data);
      },
      error => {
        console.log(error)
      });
  }

  updatePayment(): void {
    this.paymentService.update(this.currentPayment.paymentid, this.currentPayment)
    .subscribe(
      response => {
        this.submitted = true;
        console.log(response);
        this.msg = 'The payment has been updated successfully!';
        console.log(this.msg);
       
        
      },
      error => {
        console.log(error);
      }
    );
  }

  updateActive(status): void {
    this.submitted = false;
    const data = {
      depositamt: this.currentPayment.depositamt,
      startdate: this.currentPayment.startdate,
      depositfreq: this.currentPayment.depositfreq,
      active: status
    }

    this.paymentService.update(this.currentPayment.id, data)
      .subscribe(
        response => {
          this.currentPayment.active = status;
          this.submitted = true;
          console.log(response);
        },
        error => {
          console.log(error)
        }
      );
  }

  deletePayment(): void {
    this.paymentService.delete(this.currentPayment.employeeid)
      .subscribe (
        response => {
          console.log(response);
          this.router.navigate(['/payments']);
        },
        error => {
          console.log(error);
        }
      );
  }


}
