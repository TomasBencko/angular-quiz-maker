import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { QuizService } from '@/quiz/services/quiz.service';
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

  triviaCategoryOptions$ = this.quizService.getTriviaCategories()
    .pipe( map(data => data?.trivia_categories) );


  quizSelectionForm = this.fb.group({
    triviaCategory: ['', Validators.required],
    difficultyLevel: ['', Validators.required]
  });

  onSubmit(): void {

    if (!this.quizSelectionForm.valid) {
      console.log('invalid form');
      return;
    }

    console.log(this.quizSelectionForm)
    const categoryID = Number(this.quizSelectionForm.value.triviaCategory);
    const difficulty = this.quizSelectionForm.value.difficultyLevel!;
    this.quizService.generateNewQuiz(categoryID, difficulty).subscribe();
  }
}
