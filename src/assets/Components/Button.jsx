import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Button = () => {
  const [showForm, setShowForm] = useState(false);

  function handleClick() {
    setShowForm(true);
  }

  return (
    <div
      id="submit-button"
      className="fixed bottom-0 right-0 bg-white w-14 h-14 m-8 flex items-center justify-center text-2xl rounded-full"
    >
      <button onClick={handleClick}>
        <FaPlus />
      </button>
    </div>
  );
};

export default Button;
