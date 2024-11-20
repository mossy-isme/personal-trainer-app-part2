import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { AboutComponent } from './about/about.component';
import { HelpcompComponent } from './helpcomp/helpcomp.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  { path: '', redirectTo: '/clients', pathMatch: 'full' },
  { path: 'clients', component: ClientListComponent },
  { path: 'add-client', component: ClientFormComponent },
  { path: 'client/:id', component: ClientDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'help', component: HelpcompComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: '**', component: HelpcompComponent }, // Error handling
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
