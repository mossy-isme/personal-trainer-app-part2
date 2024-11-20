import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { AboutComponent } from './about/about.component';
import { HelpcompComponent } from './helpcomp/helpcomp.component';

export const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'add-client', component: ClientFormComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpcompComponent },
  { path: '**', component: HelpcompComponent }, // Fallback route
];
