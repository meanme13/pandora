import React from 'react';
import './Polls.scss';

export const Polls = () => {
  let question = 'Avete mai usato un Set Bracciale Sogna in Grande?';
  let count = 1;
  const nextQuestion = () => {
    let question2 = 'Le tevo don un Set Bracciale Sogna in Grande?';
    let question3 = 'Ave que un Set Bracciale Sogna in Grande?';
    
    if (count === 1) {
      question = question2;
      count = 2;
    } else {
      question = question3;
      count = 3;
    }
  };

  return (
    <div className="polls-container">
      <p className="polls-container__question-num">Domanda {count}/3:</p>
      <p className="polls-container__question">{question}</p>
      <div className="polls-container__btns">
        <button onClick={nextQuestion} className="polls-container__yes pointer">Sì</button>
        <button onClick={nextQuestion} className="polls-container__no pointer">no</button>
      </div>
    </div>
  );
};