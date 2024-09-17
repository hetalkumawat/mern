import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './NotesList.css';


const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/api/notes')
      .then(response => setNotes(response.data))
      .catch(error => console.log(error));
  }, []);

  const addNote = () => {
    axios.post('http://localhost:5000/api/notes', { content: newNote })
      .then(response => setNotes([...notes, response.data]))
      .catch(error => console.log(error));
    setNewNote('');
  };

  return (
    <div className="container">
      <div className="input-group">
        <input
          type="text"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Add a new note"
        />
        <button onClick={addNote}>Add Note</button>
      </div>
      <ul>
        {notes.map(note => (
          <li key={note._id}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default NotesList;
