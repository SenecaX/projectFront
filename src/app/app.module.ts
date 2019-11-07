import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseEditorComponent } from './components/courseEditor/courseEditor.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import { UploadComponent } from './upload/upload.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './components/logout/logout.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import {ProgressBarModule} from "angular-progress-bar";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ViewLectureComponent } from './components/view-lecture/view-lecture.component';
import { EmbedVideo } from 'ngx-embed-video';
import { DisqusModule } from "ngx-disqus";
import { QuizViewComponent } from './components/quiz-view/quiz-view.component';
import { QuizService } from './service/quiz.service';
import { CourseBlockComponent } from './components/courseEditor/course-block/course-block.component';
import { ChartsModule } from 'ng2-charts';
import { StatsComponent } from './components/stats/stats.component';
import { AddLectureComponent } from './components/add-lecture/add-lecture.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import {Ng8BreadcrumbModule} from 'ng8-breadcrumb';
import {NgxPaginationModule} from 'ngx-pagination';
import { QuizEditorComponent } from './components/quiz-editor/quiz-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserFormComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    CoursesComponent,
    CourseEditorComponent,
    ProfileComponent,
    UploadComponent,
    LogoutComponent,
    FooterComponent,
    HeaderComponent,
    ViewLectureComponent,
    QuizViewComponent,
    CourseBlockComponent,
    StatsComponent,
    AddLectureComponent,
    QuizEditorComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    ProgressBarModule,
    AngularFontAwesomeModule,
    EmbedVideo.forRoot(),
    DisqusModule.forRoot('webify'),
    ChartsModule,
    EditorModule,
    NgxPaginationModule,
    Ng8BreadcrumbModule.forRoot({
      prefix: 'home'
  }),
  ],
  providers: [
    UserService,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
