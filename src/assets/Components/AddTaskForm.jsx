import React, { useState } from "react";

const AddTaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    content: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setTask((preValue) => {
      return { ...preValue, [name]: value };
    });
  }

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-zinc-700 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-xl p-4 w-2/5">
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
      </form>
    </div>
  );
};

export default AddTaskForm;
