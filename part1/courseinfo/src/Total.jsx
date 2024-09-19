const Total = ({ course }) => {
  let exerciseTotal = 0;
  course.parts.forEach((part) => (exerciseTotal += part.exercises));
  return <p>Number of exercises {exerciseTotal}</p>;
};

export default Total;
