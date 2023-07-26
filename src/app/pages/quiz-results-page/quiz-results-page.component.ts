import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuizService } from '@/core/quiz.service';
import { QuestionListComponent } from '@/shared/question-list/question-list.component';
import { TriviaQuestion } from '@/models/quiz.interface';
import { ButtonWideComponent } from '@/shared/button-wide/button-wide.component';
import { Router } from '@angular/router';
import { ScoreColorDirective } from '@/shared/score-color.directive';

@Component({
  selector: 'app-quiz-results-page',
  standalone: true,
  imports: [CommonModule, QuestionListComponent, ButtonWideComponent, ScoreColorDirective],
  templateUrl: './quiz-results-page.component.html',
  styleUrls: ['./quiz-results-page.component.scss']
})
export class QuizResultsPageComponent {

  constructor(
    private router: Router,
    private quizService: QuizService
  ) {}

  quizData$: Observable<TriviaQuestion[] | null> = this.quizService.quizData$;

  correctAnswers$: Observable<number | null> = this.quizData$.pipe(
    map(data => data
      ? data.reduce((acc, question) => question.selectedAnswer === question.correctAnswer ? ++acc : acc, 0)
      : null
    )
  )

  numberOfQuestions$: Observable<number | null> = this.quizData$.pipe(
    map(data => data ? data.length : null )
  )

  successRate$: Observable<number | null> = combineLatest(
    [this.correctAnswers$, this.numberOfQuestions$]
  ).pipe(
    map((([correctAnswers, numberOfQuestions]: any[]) => { // TODO:
      console.log(`correctAnswers / numberOfQuestions`)
      console.log(correctAnswers / numberOfQuestions)
      return correctAnswers / numberOfQuestions
    }))
  )

  onNewButtonClicked() {
    this.quizService.emptyQuizData();
    this.router.navigate(['quiz']);
  }
}
