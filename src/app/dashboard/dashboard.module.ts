import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import dashboardRoutes from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    dashboardRoutes
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
