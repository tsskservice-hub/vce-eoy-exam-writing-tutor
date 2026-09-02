export interface AIEvaluationResponse {
  feedback_completed: boolean;
  evaluation_rank: 1 | 2 | 3 | 4 | 5;
  star_color: "gold" | "orange" | "green" | "purple" | "red";
  score_percentage: number;
  message_to_student: string;
}

