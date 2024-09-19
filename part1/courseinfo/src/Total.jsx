const Total = ({ courseExercises }) => {
  let exerciseTotal = 0;
  for (const [key, value] of Object.entries(courseExercises)) {
    exerciseTotal += value.exercises;
  }
  return <p>Number of exercises {exerciseTotal}</p>;
};

export default Total;
