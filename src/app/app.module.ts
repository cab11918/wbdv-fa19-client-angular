import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import CourseServiceClient from './services/CourseServiceClient';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {FormsModule} from '@angular/forms';
import {UserService} from './services/UserService';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {WidgetListComponent} from './widget-list/widget-list.component';
import ModuleServiceClient from './services/ModuleServiceClient';
import LessonServiceClient from './services/LessonServiceClient';
import TopicServiceClient from './services/TopicServiceClient';
import WidgetServiceClient from './services/WidgetServiceClient';


@NgModule({
  declarations: [
    AppComponent,
    CourseViewerComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminUsersComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
