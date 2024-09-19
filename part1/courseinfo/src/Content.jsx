import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part, key) => (
        <Part key={key} name={part.name} exercises={part.exercises} />
      ))}
    </>
  );
};

export default Content;
