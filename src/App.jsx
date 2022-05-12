import React, { useState, useEffect } from "react";

import Note from "./components/Note";
import Input from "./components/Input";

import noteService from "./services/notes";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    noteService.getAll().then((initialNotes) => {
      setNotes(initialNotes);
    });
  }, []);

  const handleNoteChange = (id) => {
    const note = notes.find((note) => note.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService.update(id, changedNote).then((returnedNote) => {
      setNotes(notes.map((note) => (note.id !== id ? note : returnedNote)));
    });
  };

  return (
    <div className="flex flex-col content-center justify-center text-center pt-6">
      <header className="p-3">
        <h1 className="text-blue-800 text-3xl font-semibold italic">Notes</h1>
      </header>
      <section className="p-3">
        <button className="btn-primary">Show important</button>
      </section>
      <section className="p-6">
        <label className="text-gray-700 mr-3" htmlFor="txtNote">
          Note:
        </label>
        <Input placeholder="Type your note here" type="text" id="txtNote" />
        <button className="btn-success ml-3">Add note</button>
      </section>
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 px-3 place-items-center">
        {notes.map((note) => (
          <Note
            key={note.id}
            content={note.content}
            isImportant={note.important}
            toggleImportance={() => handleNoteChange(note.id)}
          />
        ))}
      </section>
    </div>
  );
}

export default App;
