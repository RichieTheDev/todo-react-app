import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Todo } from "./Todo";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";
import { TodoItem } from "../intefaces"; // Import necessary types/interfaces.

// TodoWrapper component serves as the main application container.
export const TodoWrapper: React.FC = () => {
  // Function to load todos from local storage
  const loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  };

  // Function to save todos to local storage
  const saveTodosToLocalStorage = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const [todos, setTodos] = useState<TodoItem[]>(loadTodosFromLocalStorage());
  const [search, setSearch] = useState<string>("");
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showBackIcon, setShowBackIcon] = useState(false);

  // Function to add a new todo
  const addTodo = (todo: string) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  // Function to delete a todo
  const deleteTodo = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  // Function to toggle the completion status of a todo
  const toggleComplete = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  // Function to toggle the editing state of a todo
  const editTodo = (id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
    );
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  // Function to edit the task of a todo
  const editTask = (task: string, id: string) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo,
    );
    setTodos(updatedTodos);
    saveTodosToLocalStorage(updatedTodos);
  };

  // Function to toggle the search input visibility
  const toggleSearch = () => {
    setShowSearchInput(!showSearchInput);
    setShowBackIcon(!showBackIcon);
  };

  // Filter the todos based on the search input
  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(search.toLowerCase()),
  );

  // useEffect to save todos to local storage whenever todos change
  useEffect(() => {
    saveTodosToLocalStorage(todos);
  }, [todos]);

  return (
    <div className="bg-purple-100">
      <div className="w-full p-4 sm:px-10 lg:px-20 bg-white rounded-md">
        <div className="flex items-stretch ">
          {!showSearchInput && !showBackIcon && (
            <h1 className="text-2xl font-bold text-purple-600 mb-4">
              Get Things Done!
            </h1>
          )}
          {showBackIcon && (
            <FontAwesomeIcon
              icon={faArrowLeft}
              size="3x"
              onClick={toggleSearch}
              className="text-purple-600 cursor-pointer"
            />
          )}
          <div className="flex ml-auto items-center">
            {showSearchInput && (
              <input
                type="search"
                className="border-b border-purple-500 outline-none px-4 py-2 mb-4 text-black sm:w-[35vw] w-[75vw] bg-transparent placeholder-gray-400"
                placeholder="Search tasks"
                value={search}
                data-testid="search-input"
                onChange={(e) => setSearch(e.target.value)}
              />
            )}

            {!showSearchInput && !showBackIcon && (
              <FontAwesomeIcon
                icon={faSearch}
                size="2x"
                onClick={toggleSearch}
                className="text-purple-600 cursor-pointer"
                data-testid="search-icon"
              />
            )}
          </div>
        </div>

        <TodoForm addTodo={addTodo} data-testid="todo-form" />
        {/* Display filtered todos */}
        {filteredTodos.map((todo) =>
          todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo} key={todo.id} />
          ) : (
            <Todo
              key={todo.id}
              task={todo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              toggleComplete={toggleComplete}
              copyToClipboard={() => {}}
            />
          ),
        )}
      </div>
    </div>
  );
};
