import { useState } from "react";

const CreateTodo = ({ createTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) {
      setTitle("");
      return;
    }

    createTodo(title);
    setTitle("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-500 dark:bg-gray-800"
    >
      <span className="border-sm inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className="w-full text-gray-400 outline-none transition-all duration-500 dark:bg-gray-800"
        type="text"
        placeholder="Create a new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default CreateTodo;
