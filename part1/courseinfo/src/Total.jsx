const Total = ({ courseExercises }) => {
  const { exercises1, exercises2, exercises3 } = courseExercises;
  return <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>;
};

export default Total;
