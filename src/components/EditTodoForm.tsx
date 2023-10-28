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
    <form onSubmit={handleSubmit} className=" mx-auto mb-4">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="border border-purple-500 rounded-md px-4 py-2 w-[75%] text-black bg-transparent placeholder-gray-400"
        placeholder="Update task"
      />
      <button
        type="submit"
        className="mt-1 bg-purple-500 hover:bg-purple-600 text-purple-50 font-semibold px-4 py-2 rounded-md cursor-pointer"
      >
        Update Task
      </button>
    </form>
  );
};
