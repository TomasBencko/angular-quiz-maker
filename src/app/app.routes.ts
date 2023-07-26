import { Routes } from '@angular/router';

import { QuizPageComponent } from '@/pages/quiz-page/quiz-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'quiz', pathMatch: 'full' },
  { path: 'quiz', component: QuizPageComponent },
  { path: 'quiz/results',
    loadComponent: () => import('@/pages/quiz-results-page/quiz-results-page.component')
      .then(component => component.QuizResultsPageComponent)
  }
];
