import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { QuestionListItemComponent } from '../question-list-item/question-list-item.component';
import { QuestionAnswer, TriviaQuestion } from '@/models/app.models';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule, QuestionListItemComponent],
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent {

  @Input() quizData$!: Observable<TriviaQuestion[] | null>;
  @Input() quizCompleted? = false;

  @Output() questionAnswered = new EventEmitter<QuestionAnswer>();


  onQuestionAnswerSelected($event: QuestionAnswer) {
    this.questionAnswered.emit($event);
  }
}
