import { Component, OnInit } from '@angular/core';
import { GoalService } from 'src/app/Service/goal.service';

@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss']
})
export class AddGoalComponent implements OnInit {

  

  goal = {
    name: '',
    description: '',
    startdate: '',
    targetdate: '',
    targetdollar: null,
    currentsaving: null,
    active: true,
  };
  submitted = false;

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
  }

  saveGoal(): void {
    const data = {
      name: this.goal.name,
      description: this.goal.description,
      startdate: this.goal.startdate,
      targetdate: this.goal.targetdate,
      targetdollar: this.goal.targetdollar,
      currentsaving: this.goal.currentsaving,
      active: this.goal.active
    };

    console.log(data);

    this.goalService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

        this.newGoal();
  }

  newGoal(): void {
    this.submitted = false;
    this.goal = {
      name: '',
      description: '',
      startdate: '',
      targetdate: '',
      targetdollar: null,
      currentsaving: null,
      active: false
    };
  }

}
