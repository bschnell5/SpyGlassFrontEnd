import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddGoalComponent } from './Components/add-goal/add-goal.component';
import { BlogComponent } from './Components/blog/blog.component';
import { EditGoalComponent } from './Components/edit-goal/edit-goal.component';
import { GoalsComponent } from './Components/goals/goals.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './Components/home/page-not-found.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { ProgressGoalComponent } from './Components/progress-goal/progress-goal.component';
import { LoginComponent } from './user/login.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'login', component: LoginComponent},
  { path:'goals', component:GoalsComponent},
  { path: 'goals/add', component: AddGoalComponent },
  { path: 'goals/:id', component: EditGoalComponent},
  { path:'payment', component: PaymentComponent},
  { path:'progress', component: ProgressGoalComponent},
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
