import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListItemComponent } from '../question-list-item/question-list-item.component';
import { QuestionAnswer } from '@/quiz/models/quiz.interface';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule, QuestionListItemComponent],
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent {

  @Input() quizData$: any = null;

  @Output() questionAnswered = new EventEmitter<QuestionAnswer>();

  onQuestionAnswerSelected($event: QuestionAnswer) {
    this.questionAnswered.emit($event);
  }
}
