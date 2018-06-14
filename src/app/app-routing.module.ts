import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsultationComponent} from './consultation/consultation.component';
import {InsertionComponent} from './insertion/insertion.component';
import {NotificationComponent} from './notification/notification.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/consultation', pathMatch: 'full'},
  { path: 'consultation', component: ConsultationComponent},
  { path: 'insertion', component: InsertionComponent},
  { path: 'notification', component: NotificationComponent},
  { path: 'edit', component: EditComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
