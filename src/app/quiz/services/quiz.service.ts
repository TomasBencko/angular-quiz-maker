import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { retry, catchError, map, tap } from 'rxjs/operators';

import { TriviaCategories, TriviaQuestions, TriviaQuestion } from '../models/quiz.interface';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) {}

  readonly baseUrl = 'https://opentdb.com';

  private quizDataSubject$ = new BehaviorSubject<TriviaQuestion[] | null>(null);
  quizData$ = this.quizDataSubject$.asObservable();

  generateNewQuiz(categoryID: number, difficulty: string): Observable<TriviaQuestions> {
    return this.getQuestions(categoryID, difficulty)
      .pipe( tap(data => this.quizDataSubject$.next(data.results)) );
  }



  /* GETTER METHODS */

  getQuestions(categoryID: number, difficulty: string): Observable<TriviaQuestions> {
    const options = {
      params: new HttpParams().appendAll({
        amount: 5,
        category: categoryID,
        difficulty: difficulty,
        type: 'multiple'
      })
    };

    return this.http.get<TriviaQuestions>(`${this.baseUrl}/api.php`, options)
      .pipe(
        retry(3),
        catchError(this.handleError('getQuestions', {} as TriviaQuestions))
      );
  }

  getTriviaCategories(): Observable<TriviaCategories> {
    return this.http.get<TriviaCategories>(`${this.baseUrl}/api_category.php`)
      .pipe(
        retry(3),
        catchError(this.handleError('getTriviaCategories', {} as TriviaCategories))
      );
  }



  // Error handler
  private handleError<T>(operation = '', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`⚠️ Operation '${operation}' has failed!`);
      console.error(error);
      return of(result as T);
    }
  }
}
