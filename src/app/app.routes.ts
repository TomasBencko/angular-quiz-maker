import { Routes } from '@angular/router';
import { QuizPageComponent } from './quiz/feature/quiz-page/quiz-page.component';
import { QuizResultsPageComponent } from './quiz/feature/quiz-results-page/quiz-results-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'quiz/results', component: QuizResultsPageComponent },
];
