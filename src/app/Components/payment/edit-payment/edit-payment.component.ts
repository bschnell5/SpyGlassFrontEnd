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
  msg = '';
  submitted = false;
  monthlyPay: number;
  today = Date.now();
  targetDatee: Date;
  startAmt: number;
  dreamAmt: number;
  plan = false;


  constructor(
    private paymentService: PaymentService,
    private route: ActivatedRoute,
    private router: Router
  ) {  }


  ngOnInit(): void {
    this.msg = '';
    this.getPayment(this.route.snapshot.paramMap.get('id'));

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
