import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/Service/goal.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss']
})
export class AddGoalComponent implements OnInit {

  goals = {
    name: '',
    description: '',
    startDate: '',
    targetDate: '',
    targetDollar: null,
    currentSaving: null,
    active: true
  };
  submitted = false;

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
  }

  saveGoal(): void {
    const data = {
      name: this.goals.name,
      description: this.goals.description,
      startDate: this.goals.startDate,
      targetDate: this.goals.targetDate,
      currentSaving: this.goals.currentSaving,
      targetDollar: this.goals.currentSaving,
      active: this.goals.active
    };

    this.goalService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newGoal(): void {
    this.submitted = false;
    this.goals = {
      name: '',
      description: '',
      startDate: '',
      targetDate: '',
      currentSaving: null,
      targetDollar: null,
      active: false
    }
  }

  
}
