import { useState } from "react";

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
  const [highestVote, setHighestVote] = useState(0);
  const [highestVoteIdx, setHighestVoteIdx] = useState([]);
  const handleAnecdoteClick = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomNumber);
  };

  const filteredQuotes = anecdotes.filter((_, index) =>
    highestVoteIdx.includes(index)
  );

  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;

    const newHighestVoteIdx = [];
    const newHighestVote = newVotes.reduce((a, b) => Math.max(a, b), -Infinity);
    newVotes.forEach((item, index) =>
      item === newHighestVote ? newHighestVoteIdx.push(index) : null
    );

    setHighestVoteIdx(newHighestVoteIdx);
    setHighestVote(newHighestVote);
    setVotes(newVotes);
  };

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        {anecdotes[selected]}
        <p>has {votes[selected]} votes</p>
        <div>
          <Button handleClick={handleVoteClick} text="vote" />
          <Button handleClick={handleAnecdoteClick} text="next anecdote" />
        </div>
      </div>
      <div>
        <h1>Anecdote with the most votes</h1>
        {filteredQuotes.map((quote, index) => (
          <>
            <p key={index}>{quote}</p>
            <p>has {highestVote} votes</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default App;
