import { useState } from "react";
import "./App.css";
import Background from "./assets/Components/Background";
import Button from "./assets/Components/Button";
import AddTaskForm from "./assets/Components/AddTaskForm";

function App() {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm((prev) => !prev); // Toggles the form visibility
  }

  return (
    <>
      <Background />
      <Button onClick={handleClick} content={showForm} />
      {showForm && <AddTaskForm />}
    </>
  );
}

export default App;
