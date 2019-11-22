import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {ProfileComponent} from './profile/profile.component';
import {AdminUsersComponent} from './admin-users/admin-users.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {WidgetListComponent} from './widget-list/widget-list.component';


const routes: Routes = [
  {path: '', component: CourseViewerComponent},
  {path: 'courses', component: CourseGridComponent},
  {path: 'courses/:cid/modules', component: ModuleListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'admin-users', component: AdminUsersComponent},
  {path: 'courses/:cid/modules/:mid/lessons', component: LessonTabsComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics', component: TopicPillsComponent},
  {path: 'courses/:cid/modules/:mid/lessons/:lid/topics/:tid/widgets', component: WidgetListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
