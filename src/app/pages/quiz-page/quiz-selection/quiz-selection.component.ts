import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { QuizService } from '@/core/quiz.service';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-quiz-selection',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './quiz-selection.component.html',
  styleUrls: ['./quiz-selection.component.scss']
})
export class QuizSelectionComponent {

  constructor(
    private fb: FormBuilder,
    private quizService: QuizService
  ) {}

  triviaCategoryOptions$ = this.quizService.getTriviaCategories();


  quizSelectionForm = this.fb.group({
    triviaCategory: ['', Validators.required],
    difficultyLevel: ['', Validators.required]
  });


  onSubmit(): void {
    if (!this.quizSelectionForm.valid) return;

    const categoryID = Number(this.quizSelectionForm.value.triviaCategory);
    const difficulty = this.quizSelectionForm.value.difficultyLevel!;
    this.quizService.generateNewQuiz(categoryID, difficulty).subscribe();
  }
}
