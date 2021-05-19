import { Component, OnInit } from '@angular/core';
import { Goal } from 'src/app/Models/goal';
import { GoalService } from 'src/app/Service/goal.service';

@Component({
  selector: 'app-progress-goal',
  templateUrl: './progress-goal.component.html',
  styleUrls: ['./progress-goal.component.scss']
})
export class ProgressGoalComponent implements OnInit {
  goals: Goal[] = [];

  // calc = this.calculatePercentage;
  

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.retrieveGoals();
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
  private displayProgress(current, total){
    return Number(current / total) * 100 ;
  }
  
  // calculatePercentage(current, total){
  //     return Number(current / total) * 100 ;
  //   }
}