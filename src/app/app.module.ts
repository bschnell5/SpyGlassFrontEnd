import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
<<<<<<< HEAD
=======
import { ProgressComponent } from './Components/progress/progress.component';
>>>>>>> 55cd757db9eee402a351d701884c99c9c1984971

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GoalsComponent,
    PaymentComponent,
    BlogComponent,
    AddGoalComponent,
<<<<<<< HEAD
    EditGoalComponent
=======
    EditGoalComponent,
    ProgressComponent
>>>>>>> 55cd757db9eee402a351d701884c99c9c1984971
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    UserModule,
    NoopAnimationsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
