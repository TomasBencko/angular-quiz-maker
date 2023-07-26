import { DifficultyLevel, TriviaCategory } from "./app.models";

export interface TriviaCategoriesResponse {
  trivia_categories: TriviaCategory[];
}

export interface TriviaQuestionListResponse {
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
