import Person from "./Person";

const Persons = ({ people }) => {
  return (
    <div>
      {people.map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  );
};
export default Persons;
