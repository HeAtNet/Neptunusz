import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from "../login/login.component";
import { LayoutLoggedInComponent } from '../layout-logged-in/layout-logged-in.component';

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
    component: LayoutLoggedInComponent,
  },
  {
    path: 'subject',
    component: LayoutLoggedInComponent,
  },
  {
    path: 'exam',
    component: LayoutLoggedInComponent,
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
