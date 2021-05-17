import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { PaymentService } from 'src/app/Service/payment.service';
import { GoalService } from 'src/app/Service/goal.service';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  payments = [];
  goals = [];
  currentPayment = null;
  currentIndex = -1;
  active = null;

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  displayedColumns: string[] = ['paymentid', 'depositamt', 'startdate', 'depositfreq', 'status', 'action'];
  //dataSource: MatTableDataSource<payments>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private paymentService: PaymentService, private goalService: GoalService) { }

  ngOnInit(): void {
    this.retrievePayments();
  }

  retrievePayments(): void {
    this.paymentService.getAll()
      .subscribe(data => {
        console.log(data);
        this.payments = data;
      },
      error => {
        console.log(error);
      });
  }
  retrieveGoals(): void {
    this.goalService.getAll()
      .subscribe(data => {
        console.log(data);
        this.payments = data;
      },
      error => {
        console.log(error);
      });
  }

  refreshList(): void {
    this.retrievePayments();
    this.retrieveGoals();
    this.currentPayment = null;
    this.currentIndex = -1;
  }

  setActivePayment(payment, index): void {
    this.currentPayment = payment;
    this.currentIndex = index;
  }

  removeAllPayments(): void {
    this.paymentService.deleteAll()
      .subscribe(response => {
        console.log(response);
        this.retrievePayments();
      },
      error => {
        console.log(error);
      });
  }

  activePayments(active): void {
    console.log(this.payments)
    if (active) {
      this.paymentService.findByStatus("active")
        .subscribe(data => {
          console.log(data);
          this.payments = data;
        },
        error => {
          console.log(error);
        });
    }
    else {
      this.paymentService.findByStatus("inactive")
        .subscribe(data => {
          console.log(data);
          this.payments = data;
        },
        error => {
          console.log(error);
        });
    }
  }

  deletePayment(): void {
    this.paymentService.delete(this.currentPayment.id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          window.alert("Cannot delete payment! Record needed for tax purposes.")
          console.log(error);
        });
  }
}
