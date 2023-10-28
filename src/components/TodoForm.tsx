import React, { useState, ChangeEvent, FormEvent } from "react";
import { TodoFormProps } from "../intefaces"; // Import necessary types/interfaces.

// TodoForm component takes addTodo as a prop.
const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  // State to manage the input value.
  const [value, setValue] = useState<string>("");

  // Handle form submission.
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (value) {
      // Call the addTodo function with the new task value and clear the input.
      addTodo(value);
      setValue("");
    }
  };

  // Handle input value change.
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="block mb-4">
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          className="bg-transparent border border-purple-600 rounded-md p-2 mt-4 text-black w-full sm:w-[50%]"
          placeholder="What is the task today?"
        />
        <button
          type="submit"
          className="mt-1 sm:ml-1 block sm:inline btn hover-bg-purple-500"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
