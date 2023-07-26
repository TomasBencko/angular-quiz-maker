import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizResultsPageComponent } from './quiz-results-page.component';

describe('QuizResultsPageComponent', () => {
  let component: QuizResultsPageComponent;
  let fixture: ComponentFixture<QuizResultsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [QuizResultsPageComponent]
    });
    fixture = TestBed.createComponent(QuizResultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
