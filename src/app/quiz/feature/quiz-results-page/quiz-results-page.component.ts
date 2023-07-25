import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { QuizService } from '@/quiz/services/quiz.service';
import { QuestionListComponent } from '@/quiz/ui/question-list/question-list.component';
import { TriviaQuestion } from '@/quiz/models/quiz.interface';
import { ButtonWideComponent } from '@/quiz/ui/button-wide/button-wide.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-results-page',
  standalone: true,
  imports: [CommonModule, QuestionListComponent, ButtonWideComponent],
  templateUrl: './quiz-results-page.component.html',
  styleUrls: ['./quiz-results-page.component.scss']
})
export class QuizResultsPageComponent {

  constructor(
    private router: Router,
    private quizService: QuizService
  ) {}

  quizData$: Observable<TriviaQuestion[] | null> = this.quizService.quizData$;

  onNewButtonClicked() {
    this.quizService.emptyQuizData();
    this.router.navigate(['quiz']);
  }
}
