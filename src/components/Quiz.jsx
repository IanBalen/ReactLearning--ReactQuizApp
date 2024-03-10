import { useState, useCallback } from "react";
import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentActiveQuestion = userAnswers.length;
  const isQuizFinished = currentActiveQuestion === QUESTIONS.length;

  const handleAnswerClick = useCallback(function handleAnswerClick(answer) {
    setUserAnswers((prev) => {
      return [...prev, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(
    () => handleAnswerClick(null),
    [handleAnswerClick]
  );

  if (isQuizFinished) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={currentActiveQuestion}
        onSelectAnswer={handleAnswerClick}
        index={currentActiveQuestion}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
