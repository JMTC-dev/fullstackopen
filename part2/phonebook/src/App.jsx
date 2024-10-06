import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import phonebookServices from "./services/phonebook";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [notificationMessage, setNotificationMessage] = useState(null);
  useEffect(() => {
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

  const updatePerson = (person) => {
    const newPerson = { ...person, number: newNumber };
    phonebookServices
      .update(newPerson.id, newPerson)
      .then((returnedPerson) => {
        const newPersons = persons.map((person) =>
          person.id != newPerson.id ? person : returnedPerson
        );
        console.log(newPersons);
        setPersons(newPersons);
        setNewName("");
        setNewNumber("");
        if (search === "") {
          setFilteredPersons(newPersons);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const addPerson = (event) => {
    event.preventDefault();
    const inputPerson = persons.find(
      (person) => person.name === newName.trim()
    );
    if (inputPerson) {
      const confirmUpdate = window.confirm(
        `${newName} is already added to phonebook, replace the older number with a new one?`
      );
      if (confirmUpdate) {
        updatePerson(inputPerson);
      }
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
        setNotificationMessage(`Added ${returnedPerson.name}`);
        setTimeout(() => {
          setNotificationMessage(null);
        }, 5000);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.status);
        }
      });
  };

  const deletePerson = (selectedPerson) => {
    const deleteConfirmation = window.confirm(
      `Delete ${selectedPerson.name} ?`
    );
    if (!deleteConfirmation) return;

    phonebookServices
      .remove(selectedPerson.id)
      .then((returnedPersons) => {
        const newPersons = persons.filter(
          (person) => person.id != returnedPersons.id
        );
        setPersons(newPersons);
        setFilteredPersons(newPersons);
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
      <Notification message={notificationMessage} notification="success" />
      <Filter value={search} onChange={handleSearchInput} />
      <h3>Add a new</h3>
      <PersonForm
        values={{ newName, newNumber }}
        handlers={{ handleNameInput, handleNumberInput }}
        onSubmit={addPerson}
      />
      <h3>Numbers</h3>
      {persons.length === 0 ? (
        <p>No people found</p>
      ) : (
        <Persons people={filteredPersons} deletePerson={deletePerson} />
      )}
    </div>
  );
};

export default App;
