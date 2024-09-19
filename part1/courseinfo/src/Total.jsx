const Total = ({ parts }) => {
  let exerciseTotal = 0;
  console.log(parts);
  parts.forEach((part) => (exerciseTotal += part.exercises));
  return <p>Number of exercises {exerciseTotal}</p>;
};

export default Total;
