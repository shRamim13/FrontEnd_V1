import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import Swal from 'sweetalert2';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AddCandidateComponent } from './pages/admin/add-candidate/add-candidate.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddExamComponent } from './pages/admin/add-exam/add-exam.component';
import { AddExamQuestionComponent } from './pages/admin/add-exam-question/add-exam-question.component';
import { QuestionUpdateComponent } from './pages/admin/question-update/question-update.component';
import { ResultComponent } from './pages/admin/result/result.component';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { UpdateAdminComponent } from './pages/admin/update-admin/update-admin.component';
import { UpdateCandidateComponent } from './pages/admin/update-candidate/update-candidate.component';
import { UpdateExamComponent } from './pages/admin/update-exam/update-exam.component';
import { UpdatePasswordComponent } from './pages/admin/update-password/update-password.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCandidateComponent } from './pages/admin/view-candidate/view-candidate.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewExamQuestionsComponent } from './pages/admin/view-exam-questions/view-exam-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { ViewExamsComponent } from './pages/admin/view-exams/view-exams.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { MatListModule } from '@angular/material/list';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { StartComponent } from './pages/user/start/start.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { SidebarComponent as UserSidebar } from './pages/user/sidebar/sidebar.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { NgxUiLoaderHttpModule } from 'ngx-ui-loader';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CandidateDashboardComponent } from './pages/candidate/candidate-dashboard/candidate-dashboard.component';
import { ExamInstructionsComponent } from './pages/candidate/exam-instructions/exam-instructions.component';
import { ExamStartComponent } from './pages/candidate/exam-start/exam-start.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    DashboardComponent,
    AddCandidateComponent,
    AddCategoryComponent,
    AddExamComponent,
    AddExamQuestionComponent,
    QuestionUpdateComponent,
    ResultComponent,
    SidebarComponent,
    UpdateAdminComponent,
    UpdateCandidateComponent,
    UpdateExamComponent,
    UpdatePasswordComponent,
    UpdateQuizComponent,
    ViewCandidateComponent,
    ViewCategoriesComponent,
    ViewExamQuestionsComponent,
    ViewQuizzesComponent,
    WelcomeComponent,
    AddQuizComponent,
    ViewExamsComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    InstructionsComponent,
    LoadQuizComponent,
    StartComponent,
    UserDashboardComponent,
    UserSidebar,
    CandidateDashboardComponent,
    ExamInstructionsComponent,
    ExamStartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    CKEditorModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxMaterialTimepickerModule,
    ToastrModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
