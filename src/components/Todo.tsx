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
    <div className="Todo">
      <p
        className={`${task.completed ? "completed" : "incompleted"}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={() => deleteTodo(task.id)}
        />
      </div>
    </div>
  );
};
