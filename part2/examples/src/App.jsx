import { useState, useEffect } from "react";
import Note from "./components/Note";
import noteService from "./services/notes";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note...");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log("effect");
    const fetchData = async () => {
      const initialNotes = await noteService.getAll();
      setNotes(initialNotes);
    };
    fetchData();
  }, []);
  console.log("render", notes.length, "notes");

  const handleNoteChange = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = async (id) => {
    const note = notes.find((n) => n.id === id);
    const changedNote = { ...note, important: !note.important };
    const returnedNote = await noteService
      .update(id, changedNote)
      .catch((error) => {
        alert(
          `the note '${note.content}' was already deleted from the server'`
        );
        setNotes(notes.filter((n) => n.id !== id));
      });
    if (returnedNote)
      setNotes(notes.map((n) => (n.id !== id ? n : returnedNote)));
  };

  const addNote = async (event) => {
    event.preventDefault();
    console.log(event.target);
    const noteObject = {
      content: newNote,
      important: Math.random() < 0.5,
    };
    const returnedNote = await noteService.create(noteObject);
    setNotes(notes.concat(await returnedNote));
    setNewNote("");
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? "important" : "all"}
        </button>
      </div>
      <ul>
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>
    </div>
  );
};

export default App;
