import { useState } from "react";
import "./App.css";
import Background from "./assets/Components/Background";
import Button from "./assets/Components/Button";
import AddTaskForm from "./assets/Components/AddTaskForm";

function App() {
  return (
    <>
      <Background />
      <AddTaskForm />
      <Button />
    </>
  );
}

export default App;
