import React from "react";
import { FaPen } from "react-icons/fa";

const Note = ({ notes }) => {
  return (
    <div className="notes-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 fixed w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-y-scroll">
      {notes.map((note) => (
        <div
          key={note.id}
          className="note min-h-[300px] min-w-[280px] max-h-[300px] max-w-[280px] rounded-xl z-10 bg-zinc-900 flex flex-col justify-between p-4 m-4"
        >
          <div className="note-content text-white">
            <div className="heading">
              <h2>{note.title}</h2>
            </div>
            <div className="content pt-8">
              <p>{note.content}</p>
            </div>
          </div>
          <div className="buttons text-white flex items-center justify-between">
            <div className="deleteBtn bg-red-700 py-1 px-3 rounded-md">
              <button>Delete</button>
            </div>
            <div className="editBtn">
              <button>
                <FaPen />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Note;
