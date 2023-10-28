import React, { useState } from "react";

interface EditTodoFormProps {
  editTodo: (task: string, id: string) => void;
  task: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
  };
}

export const EditTodoForm: React.FC<EditTodoFormProps> = ({
  editTodo,
  task,
}) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTodo(value, task.id);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-purple-500 rounded px-3 py-2 w-full text-white bg-transparent placeholder-gray-400"
        placeholder="Update task"
      />
      <button
        type="submit"
        className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded cursor-pointer"
      >
        Update Task
      </button>
    </form>
  );
};
