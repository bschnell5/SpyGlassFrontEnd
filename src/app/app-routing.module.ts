import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGoalComponent } from './Components/add-goal/add-goal.component';
import { BlogComponent } from './Components/blog/blog.component';
import { EditGoalComponent } from './Components/edit-goal/edit-goal.component';
import { GoalsComponent } from './Components/goals/goals.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ProgressComponent } from './Components/progress/progress.component';
import { LoginComponent } from './user/login.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'login', component: LoginComponent},
  { path:'goals', component:GoalsComponent},
<<<<<<< HEAD
  { path:'goals/add', component: AddGoalComponent},
  { path:'goals/:id', component: EditGoalComponent},
  { path:'payment', component:PaymentComponent}
=======
  { path: 'goals/add', component: AddGoalComponent },
  { path: 'goals/:id', component: EditGoalComponent},
  { path:'payment', component: PaymentComponent},
  { path: 'progress', component: ProgressComponent}

>>>>>>> 55cd757db9eee402a351d701884c99c9c1984971

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
