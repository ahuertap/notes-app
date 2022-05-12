import React, { useState } from "react";

import Input from "./Input";

const FormNote = ({ addNote }) => {
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const note = {
      content: newNote,
      important: false,
    };

    addNote(note);
    setNewNote("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-gray-700 mr-3" htmlFor="txtNote">
        Note:
      </label>
      <Input
        placeholder="Type your note here"
        type="text"
        id="txtNote"
        value={newNote}
        onChange={handleChange}
        required
      />
      <button type="submit" className="btn-success ml-3">
        Add note
      </button>
    </form>
  );
};

export default FormNote;
