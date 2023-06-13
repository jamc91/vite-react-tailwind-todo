import CrossIcon from "./icons/CrossIcon";
import CheckIcon from "./icons/CheckIcon";

const TodoItem = ({ todo, updateTodo, deleteTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex items-center gap-2 border-b border-b-gray-200 p-4">
      <button
        onClick={() => updateTodo(id)}
        className={` h-5 w-5 flex-none rounded-full border-2 
        ${
          completed
            ? "flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
            : "inline-block"
        }`}
      >
        {completed && <CheckIcon />}
      </button>
      <p
        className={`grow text-gray-600 ${
          completed && "text-gray-300 line-through"
        }`}
      >
        {title}
      </p>
      <button onClick={() => deleteTodo(id)} className="flex-none">
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
