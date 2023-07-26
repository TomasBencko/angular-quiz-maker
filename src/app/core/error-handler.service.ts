import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  handleError<T>(operation = '', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(`⚠️ Operation '${operation}' has failed!`);
      console.error(error);
      return of(result as T);
    }
  }
}
