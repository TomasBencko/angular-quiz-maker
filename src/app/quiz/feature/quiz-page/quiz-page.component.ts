import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { QuizService } from '@/quiz/services/quiz.service';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuestionListComponent } from '@/quiz/ui/question-list/question-list.component';
import { ButtonWideComponent } from '@/quiz/ui/button-wide/button-wide.component';
import { QuestionAnswer, TriviaQuestion } from '@/quiz/models/quiz.interface';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [
    CommonModule, QuizSelectionComponent, QuestionListComponent,
    ButtonWideComponent
  ],
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent {

  constructor(private quizService: QuizService) {}

  quizData$: Observable<TriviaQuestion[] | null> = this.quizService.quizData$;

  quizCompleted$ = this.quizData$.pipe(
      map((data: TriviaQuestion[] | null) => {
        if (!data) return false;
        else return data.every(i => i.selectedAnswer !== null);
      })
  );

  onQuestionAnswered($event: QuestionAnswer) {
    this.quizService.updateSelectedAnswer($event.index, $event.option);
  }

  onSubmitButtonClicked() {
    console.log(`Submit button clicked`);
  }
}
