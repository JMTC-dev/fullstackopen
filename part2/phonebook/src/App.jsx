import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    console.log("effect");
    axios
      .get("http://localhost:3001/persons")
      .then((response) => {
        console.log("promise fulfilled");
        setPersons(response.data);
        setFilteredPersons(response.data);
        setisLoading(true);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.status);
        }
      });
  }, []);

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
    if (persons.some((person) => person.name === newName.trim())) {
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
      {!isLoading ? (
        <p>No notes found</p>
      ) : (
        <Persons people={filteredPersons} />
      )}
    </div>
  );
};

export default App;
