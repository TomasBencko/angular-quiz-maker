import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-question-answer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss']
})
export class QuestionAnswerComponent {

  @Input() option = '';
  @Input() isCorrect = false;
  @Input() isSelected = false;
  @Input() quizCompleted? = false;

  @Output() optionSelected = new EventEmitter<string>();


  onClick() {
    this.optionSelected.emit(this.option);
  }
}
