import React, { useState } from "react";

const AddNoteForm = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setTask({
      title: "",
      content: "",
    });
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setTask((preValue) => {
      return { ...preValue, [name]: value };
    });
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
          value={task.title}
          onChange={handleInputChange}
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
          value={task.content}
          onChange={handleInputChange}
          placeholder="Take a note..."
          rows="3"
          required
          className="w-full py-3 px-4 rounded-md bg-stone-200 outline-none"
        />

        <button className="bg-green-500 text-white text-xl font-bold w-full py-3 text-center rounded-xl my-3">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNoteForm;
