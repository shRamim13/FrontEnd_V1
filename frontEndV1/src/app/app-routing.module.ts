import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AdminGuard } from './services/admin.guard';
import { NormalGuard } from './services/normal.guard';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { QuestionUpdateComponent } from './pages/admin/question-update/question-update.component';
import { ViewExamsComponent } from './pages/admin/view-exams/view-exams.component';
import { AddExamComponent } from './pages/admin/add-exam/add-exam.component';
import { UpdateExamComponent } from './pages/admin/update-exam/update-exam.component';
import { ViewExamQuestionsComponent } from './pages/admin/view-exam-questions/view-exam-questions.component';
import { AddExamQuestionComponent } from './pages/admin/add-exam-question/add-exam-question.component';
import { AddCandidateComponent } from './pages/admin/add-candidate/add-candidate.component';
import { ViewCandidateComponent } from './pages/admin/view-candidate/view-candidate.component';
import { UpdateCandidateComponent } from './pages/admin/update-candidate/update-candidate.component';
import { UpdateAdminComponent } from './pages/admin/update-admin/update-admin.component';
import { UpdatePasswordComponent } from './pages/admin/update-password/update-password.component';
import { ResultComponent } from './pages/admin/result/result.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { CandidateGuard } from './services/candidate.guard';
import { CandidateDashboardComponent } from './pages/candidate/candidate-dashboard/candidate-dashboard.component';
import { ExamInstructionsComponent } from './pages/candidate/exam-instructions/exam-instructions.component';
import { ExamStartComponent } from './pages/candidate/exam-start/exam-start.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full',
  },
  // {
  //   path: 'admin',
  //   component: DashboardComponent,
  //   pathMatch: 'full',
  //   canActivate: [AdminGuard],
  // },

  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'candidate',
  //   component: CandidateComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'user',
  //   component: UserComponent,
  //   pathMatch: 'full',
  //   canActivate: [NormalGuard],
  // },
  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [NormalGuard],
    children: [
      {
        path: ':catId',
        component: LoadQuizComponent,
      },
      {
        path: 'instructions/:qid',
        component: InstructionsComponent,
      },
    ],
  },
  {
    path: 'start/:qid',
    component: StartComponent,
    canActivate: [NormalGuard],
  },
  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'categories',
        component: ViewCategoriesComponent,
      },
      {
        path: 'add-category',
        component: AddCategoryComponent,
      },
      {
        path: 'quizzes',
        component: ViewQuizzesComponent,
      },
      {
        path: 'add-quiz',
        component: AddQuizComponent,
      },
      {
        path: 'quiz/:qid',
        component: UpdateQuizComponent,
      },
      {
        path: 'view-questions/:qid/:title',
        component: ViewQuizQuestionsComponent,
      },
      {
        path: 'add-question/:qid/:title',
        component: AddQuestionComponent,
      },
      {
        path: 'update-question/:quesId',
        component: QuestionUpdateComponent,
      },

      {
        path: 'exams',
        component: ViewExamsComponent,
      },
      {
        path: 'add-exam',
        component: AddExamComponent,
      },
      {
        path: 'exam/:exId',
        component: UpdateExamComponent,
      },
      {
        path: 'exam-questions/:exId/:title',
        component: ViewExamQuestionsComponent,
      },
      {
        path: 'add-exam-question/:qid/:title',
        component: AddExamQuestionComponent,
      },
      {
        path: 'add-candidate/:exId',
        component: AddCandidateComponent,
      },
      {
        path: 'view-candidate/:exId',
        component: ViewCandidateComponent,
      },
      {
        path: 'update-candidate/:username/:exId',
        component: UpdateCandidateComponent,
      },
      {
        path: 'update-profile/:username',
        component: UpdateAdminComponent,
      },
      {
        path: 'secuirity-update/:username',
        component: UpdatePasswordComponent,
      },
      {
        path: 'results/:exId',
        component: ResultComponent,
      },
    ],
  },
  {
    path: 'candidate',
    component: CandidateDashboardComponent,
    canActivate: [CandidateGuard],
  },

  {
    path: 'instructions/:title/:exId',
    component: ExamInstructionsComponent,
    canActivate: [CandidateGuard],
  },

  {
    path: 'exam-start/:username/:exId',
    component: ExamStartComponent,
    canActivate: [CandidateGuard],
  },

  {
    path: 'start/:qid',
    component: StartComponent,
    canActivate: [NormalGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
