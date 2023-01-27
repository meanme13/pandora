import React from 'react';
import './Polls.scss';

export const Polls = (props) => {
  const [pollState, setPollState] = React.useState(props.data[0]);
  const [count, setCount] = React.useState(1);
  const nextQuestion = () => {
    if (count + 1 > props.data.length) {
      window.location = 'http://www.google.com';
      return;
    };
    setPollState(props.data[count]);
    setCount(count + 1);
  };

  return (
    <div className="polls-container">
      <p className="polls-container__question-num">Domanda {count}/{props.data.length}:</p>
      <p className="polls-container__question">{pollState}</p>
      <div className="polls-container__btns">
        <button onClick={nextQuestion} className="polls-container__yes pointer">Sì</button>
        <button onClick={nextQuestion} className="polls-container__no pointer">no</button>
      </div>
    </div>
  );
};