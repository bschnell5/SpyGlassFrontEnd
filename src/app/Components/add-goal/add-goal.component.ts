import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/Service/goal.service';
import { User } from 'src/app/user/user';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss']
})
export class AddGoalComponent implements OnInit {

  user: User = {
    id: 5,
    firstname: 'Kevin',
    lastname: 'Bacon',
    username: 'kbac',
    password: '123'
  };

  goals = {
    name: '',
    description: '',
    startDate: '',
    targetDate: '',
    targetDollar: null,
    currentSaving: null,
    active: true,
    user: this.user
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
      active: this.goals.active,
      user: this.user
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
      active: false,
      user: this.user
    }
  }

  
}
