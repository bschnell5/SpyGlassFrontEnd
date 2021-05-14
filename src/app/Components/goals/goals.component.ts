import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Goal } from 'src/app/Models/goal';
import { GoalService } from 'src/app/Service/goal.service';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {

  panelOpenState: boolean = false;
  goals = [];
  currentGoal = null;
  currentIndex = -1;
  active = null;

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  displayedColumns: string[] = ['goalid', 'name', 'description', 'startDate', 'endDate', 'currentsaving', 'targetdollar', 'edit', 'progress', 'payment'];
  dataSource: MatTableDataSource<Goal>;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private goalService: GoalService) { 
    this.dataSource = new MatTableDataSource(this.currentGoal)
  }

  ngOnInit(): void {
    this.retrieveGoals();
  }
  
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

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

  refreshList(): void {
    this.retrieveGoals();
    this.currentGoal = null;
    this.currentIndex = -1;
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