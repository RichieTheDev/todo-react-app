import React, { useState, ChangeEvent, FormEvent } from "react";

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="TodoForm">
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className="todo-input"
          placeholder="What is the task today?"
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
