import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Feedback = ({ clickHandlers }) => {
  const { handleGoodClick, handleNeutralClick, handleBadClick } = clickHandlers;
  return (
    <>
      <h2>give feedback</h2>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positiveScore = (good / total) * 100;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  return (
    <>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {isNaN(average) ? "0" : average}</p>
      <p>positive {isNaN(positiveScore) ? "0" : positiveScore}%</p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNetural] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNetural(updatedNeutral);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };

  return (
    <div>
      <Feedback
        clickHandlers={{ handleGoodClick, handleNeutralClick, handleBadClick }}
      />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
