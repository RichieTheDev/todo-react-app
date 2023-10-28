import React, { useState } from "react";
import { Todo } from "./Todo";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodoForm";

interface TodoItem {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
}

export const TodoWrapper: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [search, setSearch] = useState<string>("");

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id: string) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const editTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo,
      ),
    );
  };

  const editTask = (task: string, id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo,
      ),
    );
  };

  // Filter the todos based on the search input
  const filteredTodos = todos.filter((todo) =>
    todo.task.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-purple-100">
      <div className="w-full p-6 bg-white rounded-md">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600 mb-4">
            Get Things Done!
          </h1>
          <input
            type="text"
            className="w-[1/2] border border-purple-500 rounded px-3 py-2 mb-4 text-black bg-transparent placeholder-gray-400"
            placeholder="Search tasks"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <TodoForm addTodo={addTodo} />
        {/* display filtered todos */}
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
            />
          ),
        )}
      </div>
    </div>
  );
};
