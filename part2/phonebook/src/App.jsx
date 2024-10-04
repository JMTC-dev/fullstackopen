import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebookServices from "./services/phonebook";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);

  useEffect(() => {
    console.log("effect");
    phonebookServices
      .getAll()
      .then((initialPhonebook) => {
        setPersons(initialPhonebook);
        setFilteredPersons(initialPhonebook);
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
      name: newName,
      number: newNumber,
    };
    phonebookServices
      .create(newPerson)
      .then((returnedPerson) => {
        const newPersons = persons.concat(returnedPerson);
        setPersons(newPersons);
        setNewName("");
        setNewNumber("");
        if (search === "") {
          setFilteredPersons(newPersons);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.status);
        }
      });
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
      {persons.length === 0 ? (
        <p>No notes found</p>
      ) : (
        <Persons people={filteredPersons} />
      )}
    </div>
  );
};

export default App;
