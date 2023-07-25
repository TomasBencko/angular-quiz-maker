import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';

import { TriviaCategories, TriviaQuestion, TriviaQuestionsResponse, TriviaQuestionResponse } from '../models/quiz.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {}

  readonly baseUrl = 'https://opentdb.com';



  /* RETRIEVING TRIVIA CATEGORIES */

  getTriviaCategories(): Observable<TriviaCategories> {
    return this.http.get<TriviaCategories>(`${this.baseUrl}/api_category.php`)
      .pipe(
        retry(3),
        catchError(this.handleError('getTriviaCategories', {} as TriviaCategories))
      );
  }



  /* QUIZ GENERATION */

  private quizDataSubject$ = new BehaviorSubject<TriviaQuestion[] | null>(null);
  quizData$ = this.quizDataSubject$.asObservable();

  generateNewQuiz(categoryID: number, difficulty: string): Observable<TriviaQuestion[]> {
    return this.getQuestions(categoryID, difficulty).pipe(
      map(data => this.createQuizFromResponse(data)),
      tap(data => this.quizDataSubject$.next(data))
    );
  }

  private createQuizFromResponse(response: TriviaQuestionsResponse): TriviaQuestion[] {
    return response.results.map((question: TriviaQuestionResponse) => {
      return {
        question: question.question,
        options: [ // Shuffle correct answer with incorrect ones
          question.correct_answer,
          ...question.incorrect_answers
        ].sort(() => Math.random() - 0.5),
        correctAnswer: question.correct_answer,
        selectedAnswer: null
      }
    })
  }

  private getQuestions(categoryID: number, difficulty: string): Observable<TriviaQuestionsResponse> {
    const options = {
      params: new HttpParams().appendAll({
        amount: 5,
        category: categoryID,
        difficulty: difficulty,
        type: 'multiple'
      })
    };

    return this.http.get<TriviaQuestionsResponse>(`${this.baseUrl}/api.php`, options)
      .pipe(
        retry(3),
        catchError(this.handleError('getQuestions', {} as TriviaQuestionsResponse))
      );
  }


  /* QUIZ CONTROL */

  updateSelectedAnswer(questionIndex: number, selectedAnswer: string | null) {

    let updatedData: TriviaQuestion[] | undefined;

    this.quizData$.pipe(
      map((data: TriviaQuestion[] | null) => {
        updatedData = data?.map((question, index) => {
          if (questionIndex !== index) return question;
          else return { ...question, selectedAnswer: selectedAnswer };
        })
      })
      ).subscribe();

      if (updatedData) this.quizDataSubject$.next(updatedData);
  }



  /* ERROR HANDLER */

  private handleError<T>(operation = '', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`⚠️ Operation '${operation}' has failed!`);
      console.error(error);
      return of(result as T);
    }
  }
}
