import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '@/quiz/services/quiz.service';

@Component({
  selector: 'app-quiz-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss']
})
export class QuizPageComponent {

  constructor(private quizService: QuizService) {}

}
