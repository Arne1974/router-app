import { RouterModule } from '@angular/router';
import { DashComponent } from './dash.component';

const routes = [
    { path: '', component: DashComponent }
];

export default RouterModule.forChild(routes);
