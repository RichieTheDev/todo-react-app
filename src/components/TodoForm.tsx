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
          className="bg-transparent border border-purple-600 rounded-md p-2 mt-4  text-black w-[75%]"
          placeholder="What is the task today?"
        />
        <button
          type="submit"
          className="ml-1 hover:bg-purple-500 bg-purple-600 text-purple-50 rounded-md py-2 px-4 cursor-pointer"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
