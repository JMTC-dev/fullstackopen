const Part = ({ exerciseInfo }) => {
  const { name, exercises } = exerciseInfo;
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  );
};

export default Part;
