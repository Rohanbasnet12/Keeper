import { useState } from "react";
import "./App.css";
import Background from "./assets/Components/Background";
import Button from "./assets/Components/Button";
import AddNoteForm from "./assets/Components/AddNoteForm";
import Note from "./assets/Components/Note";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([]);

  function handleClick() {
    setShowForm((prev) => !prev); // Toggles the form visibility
  }

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function hideForm() {
    setShowForm(false);
  }

  return (
    <div id="app" className="overflow-y-scroll">
      <Background />
      <Button onClick={handleClick} content={showForm} />
      {showForm && <AddNoteForm onAdd={addNote} onHideForm={hideForm} />}
      <Note notes={notes} />
    </div>
  );
}

export default App;
