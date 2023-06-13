import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import BottomLabels from "./components/BottomLabels";
import FilterButtons from "./components/FilterButtons";
import DragAndDrop from "./DragAndDrop";
import { useState } from "react";

const initialStateTodos = [
  {
    id: 0,
    title: "Complete online javascript course in bluuweb",
    completed: true,
  },
  {
    id: 1,
    title: "Go to the Gym!",
    completed: false,
  },
];

const App = () => {
  const [todos, setTodos] = useState(initialStateTodos);

  const createTodo = (title) => {
    const newTodo = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(newArray);
  };

  const deleteTodo = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);

    setTodos(newArray);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat">
        <Header />
        <main className="container mx-auto mt-8 px-4 ">
          <CreateTodo createTodo={(title) => createTodo(title)} />
          <TodoList
            todos={todos}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
          <BottomLabels />
          <FilterButtons />
        </main>
        <DragAndDrop />
      </div>
    </>
  );
};

export default App;
