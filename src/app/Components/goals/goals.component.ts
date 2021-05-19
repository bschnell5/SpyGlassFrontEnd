import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GoalService } from 'src/app/Service/goal.service';



export interface Goal {
  name: '';
  description: String;
  targetdate: Date;
  currentsaving: number;
}


@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  goals: Goal [] = [];
  dataSource: MatTableDataSource<Goal>;
  currentGoal = null;
  currentIndex = -1;
  active = null;

   
  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  displayedColumns: string[] = ['goalid', 'name', 'description', 'startDate', 'targetDate', 'currentsaving', 'targetdollar', 'edit', 'progress', 'payment'];

  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private goalService: GoalService) {}

  ngOnInit(): void {
    this.retrieveGoals();
    console.log("goals component", this.goals);
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }

  retrieveGoals(): void {
    
    this.goalService.getAll()
      .subscribe(data => {
        console.log("goals comp data", data);
        // filter the data to include only 'active' goals
        let filteredData = [];
        data.forEach(goal => {
          if(goal.active === true) {
            filteredData.push(goal);
          }
        });

        this.goals = filteredData;
        
        this.dataSource = new MatTableDataSource(this.goals);
      },
      error => {
        console.log(error);
      });
    console.log("post retrieval", this.goals);
  }

  refreshList(): void {
    this.retrieveGoals();
    this.currentGoal = null;
    this.currentIndex = -1;
  }

  onPaymentEvent(calculatePayment): void {
    console.log("calculate payment", calculatePayment);
    this.currentGoal.currentsaving = calculatePayment;
  }

  setActiveGoal(goal, index): void {
    this.currentGoal = goal;
    this.currentIndex = index;
  }

  removeAllGoals(): void {
    this.goalService.deleteAll()
      .subscribe(response => {
        console.log(response);
        this.retrieveGoals();
      },
      error => {
        console.log(error);
      });
  }

  activeGoals(active): void {
    console.log(this.goals)
    if (active) {
      this.goalService.findByStatus("active")
        .subscribe(data => {
          console.log(data);
          this.goals = data;
        },
        error => {
          console.log(error);
        });
    }
    else {
      this.goalService.findByStatus("inactive")
        .subscribe(data => {
          console.log(data);
          this.goals = data;
        },
        error => {
          console.log(error);
        });
    }
  }

  deleteEmployee(): void {
    this.goalService.delete(this.currentGoal.id)
      .subscribe(
        response => {
          console.log(response);
          window.location.reload();
        },
        error => {
          window.alert("Cannot delete employee! Record needed for tax purposes.")
          console.log(error);
        });
 
    }

    

}