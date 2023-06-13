import Header from "./components/Header";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import BottomLabels from "./components/BottomLabels";
import FilterButtons from "./components/FilterButtons";
import DragAndDrop from "./DragAndDrop";
import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

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

  const clearCompleted = () => {
    const todosIncompleted = todos.filter((todo) => !todo.completed);

    setTodos(todosIncompleted);
  };

  const filteredTodos = () => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "incompleted":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  };

  const changeFilter = (filter) => setFilter(filter);
  const todosLeft = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <div className="min-h-screen bg-gray-100 bg-[url(./assets/images/bg-mobile-light.jpg)] bg-contain bg-no-repeat">
        <Header />
        <main className="container mx-auto mt-8 px-4 ">
          <CreateTodo createTodo={(title) => createTodo(title)} />
          {todos.length === 0 ? (
            <div className="container mx-auto mt-8 rounded-md bg-white p-4">
              <h2 className="text-center text-gray-400">Lista vacia</h2>
            </div>
          ) : (
            <TodoList
              todos={filteredTodos()}
              updateTodo={updateTodo}
              deleteTodo={deleteTodo}
            />
          )}

          {todos.length > 0 && (
            <BottomLabels clearCompleted={clearCompleted} count={todosLeft} />
          )}
          <FilterButtons filter={changeFilter} selection={filter} />
        </main>
        <DragAndDrop />
      </div>
    </>
  );
};

export default App;
