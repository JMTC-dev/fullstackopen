import Part from "./Part";

const Content = ({ courseContent }) => {
  const { part1, part2, part3 } = courseContent;
  return (
    <div>
      <Part exerciseInfo={part1} />
      <Part exerciseInfo={part2} />
      <Part exerciseInfo={part3} />
    </div>
  );
};

export default Content;
