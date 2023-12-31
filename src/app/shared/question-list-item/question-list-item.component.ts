import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionAnswerComponent } from '../question-answer/question-answer.component';
import { QuestionAnswer, TriviaQuestion } from '@/models/app.models';

@Component({
  selector: 'app-question-list-item',
  standalone: true,
  imports: [CommonModule, QuestionAnswerComponent],
  templateUrl: './question-list-item.component.html',
  styleUrls: ['./question-list-item.component.scss']
})
export class QuestionListItemComponent {

  @Input() questionData!: TriviaQuestion;
  @Input() questionIndex!: number;
  @Input() quizCompleted? = false;

  @Output() questionAnswerSelected = new EventEmitter<QuestionAnswer>()


  onOptionSelected(option: string) {
    if (option === this.questionData.selectedAnswer) {
      this.questionAnswerSelected.emit({ index: this.questionIndex, option: null });

    } else {
      this.questionAnswerSelected.emit({ index: this.questionIndex, option });
    }
  }
}
