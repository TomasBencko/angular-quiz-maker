
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
