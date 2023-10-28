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

  return (
    <div className="bg-purple-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full p-6 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold text-purple-600 mb-4">
          Get Things Done!
        </h1>
        <TodoForm addTodo={addTodo} />
        {/* display todos */}
        {todos.map((todo) =>
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
