import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MaterialModule } from './shared/material.module';
import { GoalsComponent } from './Components/goals/goals.component';
import { PaymentComponent } from './Components/payment/payment.component';
import { UserModule } from './user/user.module';
import { BlogComponent } from './Components/blog/blog.component';
import { HttpClientModule } from '@angular/common/http';
import { AddGoalComponent } from './Components/add-goal/add-goal.component';
import { EditGoalComponent } from './Components/edit-goal/edit-goal.component';
import { ProgressGoalComponent } from './Components/progress-goal/progress-goal.component';
import { StarComponent } from './Components/star/star.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddPaymentComponent } from './Components/payment/add-payment/add-payment.component';
import { EditPaymentComponent } from './Components/payment/edit-payment/edit-payment.component';
import { PaymentService } from './Service/payment.service';
import { GoalService } from './Service/goal.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GoalsComponent,
    PaymentComponent,
    BlogComponent,
    AddGoalComponent,
    EditGoalComponent,
    ProgressGoalComponent,
    StarComponent,
    AddPaymentComponent,
    EditPaymentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    UserModule,
    FormsModule,
    NoopAnimationsModule,
    NgbModule
  ],
  providers: [HttpClientModule, PaymentService, GoalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
