import React, { useState } from "react";
import { EditTodoFormProps } from "../intefaces"; // Import necessary types/interfaces.

// EditTodoForm component takes editTodo and task as props.
export const EditTodoForm: React.FC<EditTodoFormProps> = ({
  editTodo,
  task,
}) => {
  // Initialize state to manage the input value.
  const [value, setValue] = useState(task.task);

  // Handle form submission.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call the editTodo function with the new task value and task ID.
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)} // Update the value in state as the user types.
        className="border border-purple-500 rounded-md px-4 py-2 w-full sm:w-[50%] text-black bg-transparent placeholder-gray-400"
        placeholder="Update task"
      />
      <button type="submit" className="ml-1 btn hover-bg-purple-500">
        Update Task
      </button>
    </form>
  );
};
