import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Feedback = ({ clickHandlers }) => {
  const { handleGoodClick, handleNeutralClick, handleBadClick } = clickHandlers;
  return (
    <>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
    </>
  );
};

const StatisticLine = ({ text, value }) => (
  <>
    <tr>
      <th style={{ textAlign: "left" }}>{text}</th>
      <td>{value}</td>
    </tr>
  </>
);

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positiveScore = (good / total) * 100;
  const average = (good * 1 + neutral * 0 + bad * -1) / total;
  if (total === 0) return <div>No feedback given</div>;
  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positiveScore} />
        </tbody>
      </table>
    </div>
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
      <h2>give feedback</h2>
      <Feedback
        clickHandlers={{ handleGoodClick, handleNeutralClick, handleBadClick }}
      />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
