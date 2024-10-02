import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPersons, setFilteredPersons] = useState(persons);

  const handleNameInput = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberInput = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchInput = (event) => {
    const searchValue = event.target.value;
    setSearch(searchValue);
    const newPersons = persons.filter((person) =>
      person.name
        .trim()
        .toLowerCase()
        .includes(searchValue.trim().toLowerCase())
    );
    setFilteredPersons(newPersons);
  };

  const addPerson = (event) => {
    event.preventDefault();
    if (persons.find((person) => person.name === newName.trim())) {
      window.alert(`${newName} is already added to phonebook`);
      return;
    }
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    const newPersons = persons.concat(newPerson);
    setPersons(newPersons);
    if (search === "") {
      setFilteredPersons(newPersons);
    }
    setNewName("");
    setNewNumber("");
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={search} onChange={handleSearchInput} />
      <h3>Add a new</h3>
      <PersonForm
        values={{ newName, newNumber }}
        handlers={{ handleNameInput, handleNumberInput }}
        onSubmit={addPerson}
      />
      <h3>Numbers</h3>
      <Persons people={filteredPersons} />
    </div>
  );
};

export default App;
