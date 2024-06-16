import { useState } from "react";
import "./App.css";
import Background from "./assets/Components/Background";
import Button from "./assets/Components/Button";
import AddNoteForm from "./assets/Components/AddNoteForm";
import Note from "./assets/Components/Note";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((prev) => !prev); // Toggles the form visibility
  }

  return (
    <div id="app" className="overflow-y-scroll">
      <Background />
      <Button onClick={handleClick} content={showForm} />
      {showForm && <AddNoteForm />}
      <Note />
    </div>
  );
}

export default App;
