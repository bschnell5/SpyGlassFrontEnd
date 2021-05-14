import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './Components/blog/blog.component';
import { GoalsComponent } from './Components/goals/goals.component';
import { HomeComponent } from './components/home/home.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { LoginComponent } from './user/login.component';

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'login', component: LoginComponent},
  { path:'goals', component:GoalsComponent},
  { path:'payment', component:PaymentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
