import React from "react";
import { FaPlus, FaTimes } from "react-icons/fa"; // Ensure correct import

const Button = ({ onClick, content }) => {
  return (
    <div
      id="submit-button"
      className="fixed bottom-0 right-0 bg-white w-14 h-14 m-8 flex items-center justify-center text-2xl rounded-full"
    >
      <button onClick={onClick}>{content ? <FaTimes /> : <FaPlus />}</button>
    </div>
  );
};

export default Button;
