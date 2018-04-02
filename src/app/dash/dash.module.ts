import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashComponent } from './dash.component';
import dashRoutes from './dash.routes';


@NgModule({
    imports: [CommonModule, dashRoutes],
    declarations: [DashComponent]
})

export default class DashModule { }
