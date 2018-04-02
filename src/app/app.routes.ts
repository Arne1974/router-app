import { RouterModule } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import ContactsModule from './contacts/contacts.module';
import HomeModule from './home/home.module';
import DashModule from './dash/dash.module';


const routes = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'contacts', loadChildren: () => ContactsModule },
  { path: 'dashboard', loadChildren: () => DashboardModule },
  { path: 'dash', loadChildren: () => DashModule },
];

export default RouterModule.forRoot(routes);
