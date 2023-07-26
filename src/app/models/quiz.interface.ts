
export interface TriviaCategories {
  trivia_categories: TriviaCategory[];
}

export interface TriviaCategory {
  id: number;
  name: string;
}

export interface TriviaQuestion {
  readonly question: string;
  readonly options: string[];
  readonly correctAnswer: string;
  selectedAnswer: string | null;
}

export interface TriviaQuestionsResponse {
  response_code?: number;
  results: TriviaQuestionResponse[];
}

export interface TriviaQuestionResponse {
  category: string;
  type: 'multiple';
  difficulty: DifficultyLevel;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

export interface QuestionAnswer {
  index: number;
  option: string | null;
}
