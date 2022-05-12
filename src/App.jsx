import React, { useState, useEffect } from "react";

import Note from "./components/Note";
import FormNote from "./components/FormNote";

import noteService from "./services/notes";

function App() {
  const [notes, setNotes] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const addNote = (newNote) => {
    noteService.create(newNote).then((returnedNote) => {
      setNotes(notes.concat(returnedNote));
    });
  };

  const handleNoteChange = (id) => {
    const note = notes.find((note) => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote).then((returnedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
    });
  };

  const handleDeleteNote = (id) => {
    noteService.remove(id).then(() => {
      setNotes(notes.filter((note) => note.id !== id));
    });
  };

  const handleShowNotes = () => {
    setShowAll(!showAll);
  };

  const notesToShow = showAll ? notes : notes.filter((note) => note.important);

  return (
    <div className="flex flex-col content-center justify-center text-center pt-6">
      <header className="p-3">
        <h1 className="text-blue-800 text-3xl font-semibold italic">Notes</h1>
      </header>
      <section className="p-3">
        <button className="btn-primary" onClick={handleShowNotes}>
          Show {showAll ? "important" : "all"}
        </button>
      </section>
      <section className="p-6">
        <FormNote addNote={addNote} />
      </section>
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 px-3 place-items-center">
        {notesToShow.map((note) => (
          <Note
            key={note.id}
            content={note.content}
            isImportant={note.important}
            toggleImportance={() => handleNoteChange(note.id)}
            toggleDelete={() => handleDeleteNote(note.id)}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
