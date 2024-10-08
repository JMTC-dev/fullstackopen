const Header = ({ course }) => <h2>{course}</h2>;

const Total = ({ sum }) => {
  const total = sum.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return (
    <p>
      <strong>total of exercises {total}</strong>
    </p>
  );
};

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part key={part.id} part={part} />
    ))}
  </>
);

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts.map((part) => part.exercises)} />
    </div>
  );
};

export default Course;
