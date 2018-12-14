import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "../login/login.component";
import { LayoutLoggedInComponent } from '../layout-logged-in/layout-logged-in.component';
import { SubjectListComponent } from '../subject-list/subject-list.component';
import { SubjectViewComponent } from '../subject-view/subject-view.component';
import { ExamListComponent } from '../exam-list/exam-list.component';
import { ExamViewComponent } from '../exam-view/exam-view.component';
import { MessageListComponent } from '../message-list/message-list.component';
import { MessageViewComponent } from '../message-view/message-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'message',
    component: MessageListComponent,
  },
  {
    path: 'message/:id',
    component: MessageViewComponent,
  },
  {
    path: 'subject',
    component: SubjectListComponent,
  },
  {
    path: 'subject/:id',
    component: SubjectViewComponent,
  },
  {
    path: 'exam',
    component: ExamListComponent,
  },
  {
    path: 'exam/:id',
    component: ExamViewComponent,
  },
  {
    path: 'logout',
    component: LayoutLoggedInComponent,
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
