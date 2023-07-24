
export interface TriviaCategories {
  trivia_categories: TriviaCategory[];
}

export interface TriviaCategory {
  id: number;
  name: string;
}

export interface TriviaQuestions {
  response_code?: number;
  results: TriviaQuestion[];
}

export interface TriviaQuestion {
  category: string;
  type: 'multiple';
  difficulty: DifficultyLevel;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export type DifficultyLevel = 'easy' | 'medium' | 'hard';
