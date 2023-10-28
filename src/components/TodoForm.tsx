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
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className="bg-transparent border border-purple-600 rounded p-2 mt-4 mb-6 text-white w-60"
          placeholder="What is the task today?"
        />
        <button
          type="submit"
          className="bg-purple-600 text-white rounded p-2 cursor-pointer"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
