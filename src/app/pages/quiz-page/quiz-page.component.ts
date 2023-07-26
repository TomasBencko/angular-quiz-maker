import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { QuizService } from '@/core/quiz.service';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuestionListComponent } from '@/shared/question-list/question-list.component';
import { ButtonWideComponent } from '@/shared/button-wide/button-wide.component';
import { QuestionAnswer, TriviaQuestion } from '@/models/app.models';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [CommonModule, QuizSelectionComponent, QuestionListComponent, ButtonWideComponent],
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private quizService: QuizService
  ) {}

  quizData$: Observable<TriviaQuestion[] | null> = this.quizService.quizData$;

  quizCompleted$ = this.quizData$.pipe(
    map((data: TriviaQuestion[] | null) => {
      return data ? data.every(i => i.selectedAnswer !== null) : false;
    })
  );


  onQuestionAnswered($event: QuestionAnswer) {
    this.quizService.updateSelectedAnswer($event.index, $event.option);
  }

  onSubmitButtonClicked() {
    this.router.navigate(['results'], { relativeTo: this.activatedRoute });
  }
}
