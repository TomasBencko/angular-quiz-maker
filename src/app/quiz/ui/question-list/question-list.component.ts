import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionListItemComponent } from '../question-list-item/question-list-item.component';

@Component({
  selector: 'app-question-list',
  standalone: true,
  imports: [CommonModule, QuestionListItemComponent],
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent {

  @Input() quizData$: any = null;

}
