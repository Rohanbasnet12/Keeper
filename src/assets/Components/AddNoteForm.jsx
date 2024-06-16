import React, { useState, useEffect } from "react";

const AddNoteForm = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    if (props.isEditing && props.currentNote) {
      setNote(props.currentNote);
    } else {
      setNote({
        title: "",
        content: "",
      });
    }
  }, [props.isEditing, props.currentNote]);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (props.isEditing) {
      props.onEdit(note);
    } else {
      props.onAdd(note);
    }
    setNote({
      title: "",
      content: "",
    });
    props.onHideForm();
  }

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-700 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl p-4 w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5 z-50">
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label htmlFor="title" className="text-zinc-300">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          value={note.title}
          onChange={handleChange}
          required
          placeholder="title"
          className="w-full py-3 px-4 rounded-md bg-stone-200 outline-none"
        />
        <label htmlFor="content" className="text-zinc-300">
          Content
        </label>
        <textarea
          id="content"
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Take a note..."
          rows="3"
          required
          className="w-full py-3 px-4 rounded-md bg-stone-200 outline-none"
          maxLength="180"
        />

        <button className="bg-green-500 text-white text-xl font-bold w-full py-3 text-center rounded-xl my-3">
          {props.isEditing ? "Update" : "Add"}
        </button>
      </form>
    </div>
  );
};

export default AddNoteForm;
