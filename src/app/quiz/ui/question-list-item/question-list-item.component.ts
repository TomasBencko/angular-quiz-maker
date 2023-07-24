import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TriviaQuestion } from '@/quiz/models/quiz.interface';

@Component({
  selector: 'app-question-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question-list-item.component.html',
  styleUrls: ['./question-list-item.component.scss']
})
export class QuestionListItemComponent implements OnInit {

  @Input() questionData!: TriviaQuestion;

  options: any = [];

  ngOnInit(): void {
    this.options = [
      this.questionData.correct_answer,
      ...this.questionData.incorrect_answers
    ].sort(() => Math.random() - 0.5);
  }

}
