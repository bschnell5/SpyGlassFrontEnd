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
  today = Date.now();
  currentGoal = null;

  get targetdate(): Date{
    return this.goalService.targetdate;
  }
  set targetDate(value: Date){
    this.goalService.targetdate = value;
  }
  
  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.retrieveGoals();
    this.displayTimeRemaining();
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
   
    return Number(current / total) * 100;
    
  }

  displayTimeRemaining(): void{
    console.log(this.goalService.targetdate);
    var m2 = new Date(this.goalService.targetdate).getMonth();
    var diff = ((m2) - new Date().getMonth());
    console.log(diff);  
  }
  
}