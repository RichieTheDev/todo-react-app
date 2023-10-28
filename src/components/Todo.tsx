import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

interface TodoProps {
  task: {
    id: string;
    task: string;
    completed: boolean;
  };
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
}

export const Todo: React.FC<TodoProps> = ({
  task,
  deleteTodo,
  editTodo,
  toggleComplete,
}) => {
  return (
    <div className="bg-purple-600 text-white rounded p-3 mb-4 flex justify-between items-center">
      <p
        className={`${
          task.completed ? "line-through text-purple-300" : "cursor-pointer"
        }`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="cursor-pointer"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="cursor-pointer ml-3"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
