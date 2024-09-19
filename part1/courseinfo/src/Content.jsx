import Part from "./Part";

const Content = ({ course }) => {
  return (
    <>
      {course.parts.map((part, key) => (
        <Part key={key} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

export default Content;
