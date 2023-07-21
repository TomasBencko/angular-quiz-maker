import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '@/quiz/services/quiz.service';

@Component({
  selector: 'app-quiz-results-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-results-page.component.html',
  styleUrls: ['./quiz-results-page.component.scss']
})
export class QuizResultsPageComponent {

  constructor(private quizService: QuizService) {}

}
