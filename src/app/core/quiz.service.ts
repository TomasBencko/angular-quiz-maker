import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ErrorHandlerService } from './error-handler.service';
import { TriviaCategoriesResponse, TriviaQuestionListResponse, TriviaQuestionResponse } from '@/models/api.models';
import { TriviaQuestion, TriviaCategory, DifficultyLevel } from '@/models/app.models';
import { compareByName, shuffle } from '@/utils/sort.utils';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  readonly baseUrl = environment.apiUrl;
  private readonly numberOfQuestionsToFetch = 5;

  constructor(
    private http: HttpClient,
    private errorHandlerService: ErrorHandlerService
  ) {}



  /* SERVICE STATE */

  private quizDataSubject$ = new BehaviorSubject<TriviaQuestion[] | null>(null);
  quizData$ = this.quizDataSubject$.asObservable();



  /* RETRIEVING TRIVIA CATEGORIES */

  getTriviaCategories(): Observable<TriviaCategory[]> {
    return this.http.get<TriviaCategoriesResponse>(`${this.baseUrl}/api_category.php`).pipe(
      catchError(this.errorHandlerService.handleError('getTriviaCategories', {} as TriviaCategoriesResponse)),
      map(data => [...data.trivia_categories].sort(compareByName))
    );
  }



  /* QUIZ GENERATION */

  generateNewQuiz(categoryID: number, difficulty: DifficultyLevel): Observable<TriviaQuestion[]> {
    return this.getQuestions(categoryID, difficulty).pipe(
      map(data => this.createQuizFromResponse(data)),
      tap(data => this.quizDataSubject$.next(data))
    );
  }

  private createQuizFromResponse(response: TriviaQuestionListResponse): TriviaQuestion[] {
    return response.results.map((question: TriviaQuestionResponse) => {
      return {
        question: question.question,
        options: shuffle([ ...question.incorrect_answers, question.correct_answer ]),
        correctAnswer: question.correct_answer,
        selectedAnswer: null
      }
    });
  }

  private getQuestions(categoryID: number, difficulty: DifficultyLevel): Observable<TriviaQuestionListResponse> {
    const options = {
      params: new HttpParams().appendAll({
        amount: this.numberOfQuestionsToFetch,
        category: categoryID,
        difficulty: difficulty,
        type: 'multiple'
      })
    };

    return this.http.get<TriviaQuestionListResponse>(`${this.baseUrl}/api.php`, options).pipe(
      catchError(this.errorHandlerService.handleError('getQuestions', {} as TriviaQuestionListResponse))
    );
  }



  /* QUIZ CONTROL */

  updateSelectedAnswer(questionIndex: number, selectedAnswer: string | null) {
    this.quizDataSubject$.next(
      this.quizDataSubject$.getValue()?.map((questionData, index) => {
        return questionIndex === index
          ? { ...questionData, selectedAnswer: selectedAnswer }
          : questionData;
      }) || null
    );
  }

  emptyQuizData() {
    this.quizDataSubject$.next(null);
  }
}
