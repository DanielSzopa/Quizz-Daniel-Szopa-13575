import React, { createContext, useReducer } from 'react';
import questions from '../data';
import { shuffleAnswers } from '../helpers';

const initialState = {
  questions,
  currentQuestionIndex: 0,
  currentAnswer: '',
  answers: shuffleAnswers(questions[0]),
  showResults: false,
  correctAnswersCount: 0,
  correctForSave: 0,
};

let correctAnswersForQuestions;

const reducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_ANSWER': {
      const correctAnswersCount =
        action.payload ===
        state.questions[state.currentQuestionIndex].correctAnswer
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount;
      correctAnswersForQuestions = correctAnswersCount;
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswersCount,
      };
    }
    case 'NEXT_QUESTION': {
      const showResults =
        state.currentQuestionIndex === state.questions.length - 1;
      const currentQuestionIndex = showResults
        ? state.currentQuestionIndex
        : state.currentQuestionIndex + 1;
      const answers = showResults
        ? []
        : shuffleAnswers(state.questions[currentQuestionIndex]);
      return {
        ...state,
        currentAnswer: '',
        showResults,
        currentQuestionIndex,
        answers,
      };
    }
    case 'RESTART': {
      document.location.reload();
    }
    case 'SAVE': {
      let jsonObject = {
        email: document.getElementById('emailInput').value,
        nick: document.getElementById('nickInput').value,
        questions: initialState.questions.length,
        correctAnswers: correctAnswersForQuestions,
      };

      let element = document.createElement('a');
      let json = encodeURIComponent(JSON.stringify(jsonObject));

      let data = 'data:text/json;charset=utf-8,' + json;
      element.setAttribute('href', data);
      element.setAttribute('download', 'quiz.json');

      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
    default:
      return state;
  }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
