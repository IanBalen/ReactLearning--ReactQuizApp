import trophyLogo from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  let skipped = userAnswers.filter((answer) => answer === null);
  let correct = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  let incorrect = userAnswers.filter(
    (answer, index) => answer !== QUESTIONS[index].answers[0]
  );

  skipped = Math.round((skipped.length / userAnswers.length) * 100);
  correct = Math.round((correct.length / userAnswers.length) * 100);
  incorrect = Math.round((incorrect.length / userAnswers.length) * 100);

  return (
    <div id="summary">
      <img src={trophyLogo} alt="trophy icon" />
      <h2>Quiz completed</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipped}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correct}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{incorrect}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
