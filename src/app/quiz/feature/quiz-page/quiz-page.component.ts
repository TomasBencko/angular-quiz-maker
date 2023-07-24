import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs/operators';

import { QuizService } from '@/quiz/services/quiz.service';
import { QuizSelectionComponent } from './quiz-selection/quiz-selection.component';
import { QuestionListComponent } from '@/quiz/ui/question-list/question-list.component';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [
    CommonModule, QuizSelectionComponent, QuestionListComponent
  ],
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent {

  constructor(private quizService: QuizService) {}

  quizData$ = this.quizService.quizData$;

}
