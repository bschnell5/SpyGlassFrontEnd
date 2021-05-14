import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalService } from 'src/app/Service/goal.service';

@Component({
  selector: 'app-edit-goal',
  templateUrl: './edit-goal.component.html',
  styleUrls: ['./edit-goal.component.scss']
})
export class EditGoalComponent implements OnInit {

  currentGoal = null;
  message = '';

  constructor(private goalService: GoalService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getGoal(this.route.snapshot.paramMap.get('id'));
  }

  getGoal(id): void {
    this.goalService.get(id).subscribe(data => {
      console.log("getGoal", data);
      this.currentGoal = data;
      console.log("currentGoal", this.currentGoal)
    },
    error => {
      console.log(error);
    })
  }

  updateGoal(): void {
    this.goalService.update(this.currentGoal.goalid, this.currentGoal)
      .subscribe(response => {
        console.log("response", response); 
        this.message = 'The goal was updated successfully!';
      },
      error => {
        console.log(error);
      });
  }

  updateActive(status): void {
    const data = {
      id: this.currentGoal.goalid,
      name: this.currentGoal.name,
      description: this.currentGoal.description,
      startDate: this.currentGoal.startDate,
      targetDate: this.currentGoal.targetDate,
      currentSaving: this.currentGoal.currentSaving,
      targetDollar: this.currentGoal.targetDollar,
      active: status
    };
    
    this.goalService.update(this.currentGoal.id, data)
      .subscribe(response => {
        console.log(response);
        this.currentGoal.active = status;
      },
      error => {
        console.log(error);
      });
  }

}
