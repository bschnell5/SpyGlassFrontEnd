import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressGoalComponent } from './progress-goal.component';

describe('ProgressGoalComponent', () => {
  let component: ProgressGoalComponent;
  let fixture: ComponentFixture<ProgressGoalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressGoalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
