import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';

import { QuizService } from '@/core/quiz.service';
import { DifficultyLevel, QuizSelectionForm } from '@/models/app.models';

@Component({
  selector: 'app-quiz-selection',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.scss']
})
export class QuizSelectionComponent {

  constructor(private quizService: QuizService) {}

  triviaCategoryOptions$ = this.quizService.getTriviaCategories();

  difficultyOptions = [
    { value: 'easy', label: 'Easy' },
    { value: 'medium', label: 'Medium' },
    { value: 'hard', label: 'Hard' }
  ]

  quizSelectionForm = new FormGroup<QuizSelectionForm>({
    triviaCategory: new FormControl('', Validators.required),
    difficultyLevel: new FormControl('', Validators.required)
  });


  onSubmit(): void {
    if (!this.quizSelectionForm.valid) return;

    const categoryID = Number(this.quizSelectionForm.value.triviaCategory);
    const difficulty: DifficultyLevel = this.quizSelectionForm.value.difficultyLevel as DifficultyLevel;
    this.quizService.generateNewQuiz(categoryID, difficulty).subscribe();
  }
}
