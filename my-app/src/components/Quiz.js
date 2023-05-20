import { useContext } from 'react';
import Question from './Question';
import { QuizContext } from '../contexts/quiz';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  return (
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">
            Congrats on completing the quiz!
          </div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              Your score {quizState.correctAnswersCount} of &nbsp;
              {quizState.questions.length} right.
            </div>
          </div>
          <div
            onClick={() => dispatch({ type: 'RESTART' })}
            className="next-button"
          >
            Restart
          </div>
          <div
            onClick={() => dispatch({ type: 'SAVE' })}
            className="next-button"
            id="saveBtn"
          >
            Save
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="nameContainer">
            Email: <span id="emailSpan"></span> Nick:
            <span id="nickSpan"></span>
          </div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {quizState.currentAnswer && (
            <div
              onClick={() => dispatch({ type: 'NEXT_QUESTION' })}
              className="next-button"
            >
              Next question
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
