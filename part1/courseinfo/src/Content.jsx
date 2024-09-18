import Part from "./Part";

const Content = ({ courseContent }) => {
  const { part1, exercises1, part2, exercises2, part3, exercises3 } =
    courseContent;
  return (
    <div>
      <Part exerciseName={part1} exerciseCount={exercises1} />
      <Part exerciseName={part2} exerciseCount={exercises2} />
      <Part exerciseName={part3} exerciseCount={exercises3} />
    </div>
  );
};

export default Content;
