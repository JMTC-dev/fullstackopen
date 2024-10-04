import Person from "./Person";

const Persons = ({ people, deletePerson }) => {
  return (
    <div>
      {people.map((person) => (
        <Person key={person.id} person={person} deletePerson={deletePerson} />
      ))}
    </div>
  );
};
export default Persons;
