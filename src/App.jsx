import { useState } from "react";
import "./App.css";
import Background from "./assets/Components/Background";
import Button from "./assets/Components/Button";
import AddNoteForm from "./assets/Components/AddNoteForm";
import Note from "./assets/Components/Note";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNote, setCurrentNote] = useState(null);

  function handleClick() {
    setShowForm((prev) => !prev); // Toggles the form visibility
    setIsEditing(false);
    setCurrentNote(null);
  }

  function addNote(newNote) {
    const id = generateUniqueId();
    const timestamp = new Date().toISOString();
    const noteWithMetadata = { ...newNote, id, timestamp };
    setNotes((prevNotes) => [...prevNotes, noteWithMetadata]);
  }

  function editNote(updatedNote) {
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setIsEditing(false);
    setCurrentNote(null);
    setShowForm(false);
  }

  function deleteNote(id) {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  }

  function generateUniqueId() {
    // Example function to generate unique id (use uuid or similar library)
    return Math.random().toString(36).substr(2, 9);
  }

  function handleEdit(note) {
    setIsEditing(true);
    setCurrentNote(note);
    setShowForm(true);
  }

  return (
    <div id="app" className="overflow-y-scroll">
      <Background />
      <Button onClick={handleClick} content={showForm} />
      {showForm && (
        <AddNoteForm
          onAdd={addNote}
          onEdit={editNote}
          onHideForm={() => setShowForm(false)}
          isEditing={isEditing}
          currentNote={currentNote}
        />
      )}
      <Note notes={notes} onDelete={deleteNote} onEdit={handleEdit} />
    </div>
  );
}

export default App;
