import React, { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

interface TodoProps {
  task: {
    id: string;
    task: string;
    completed: boolean;
  };
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
  toggleComplete: (id: string) => void;
  copyToClipboard: () => void; // Function to copy to clipboard
}

export const Todo: React.FC<TodoProps> = ({
  task,
  deleteTodo,
  editTodo,
  toggleComplete,
  copyToClipboard,
}) => {
  const [showCopyNotification, setShowCopyNotification] = useState(false);

  const copyTodoToClipboard = () => {
    navigator.clipboard.writeText(task.task).then(() => {
      // Show the notification when copying is successful
      setShowCopyNotification(true);

      // Hide the notification after a delay (e.g., 2 seconds)
      setTimeout(() => {
        setShowCopyNotification(false);
      }, 2000);
    });
  };

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
        <FontAwesomeIcon
          className="cursor-pointer ml-3"
          icon={faCopy}
          onClick={copyTodoToClipboard}
        />
      </div>
      {showCopyNotification && (
        <div className="copy-notification">Copied to clipboard!</div>
      )}
    </div>
  );
};
