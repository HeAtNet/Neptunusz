import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { LayoutLoggedInComponent } from './layout-logged-in/layout-logged-in.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { SubjectViewComponent } from './subject-view/subject-view.component';
import { ExamListComponent } from './exam-list/exam-list.component';
import { ExamViewComponent } from './exam-view/exam-view.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageViewComponent } from './message-view/message-view.component';
import { MessageComponent } from './message/message.component';
import { ExamComponent } from './exam/exam.component';
import { SubjectComponent } from './subject/subject.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    LayoutLoggedInComponent,
    SubjectListComponent,
    SubjectViewComponent,
    ExamListComponent,
    ExamViewComponent,
    MessageListComponent,
    MessageViewComponent,
    MessageComponent,
    ExamComponent,
    SubjectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
