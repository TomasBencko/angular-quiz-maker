import { FormControl } from "@angular/forms";

export interface TriviaQuestion {
  readonly question: string;
  readonly options: string[];
  readonly correctAnswer: string;
  selectedAnswer: string | null;
}

export interface QuestionAnswer {
  index: number;
  option: string | null;
}

export interface TriviaCategory {
  id: number;
  name: string;
}

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface QuizSelectionForm {
  triviaCategory?: FormControl<string | null>;
  difficultyLevel?: FormControl<DifficultyLevel | '' | null>;
}
