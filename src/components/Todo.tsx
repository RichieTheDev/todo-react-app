import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { TodoProps } from "../intefaces"; // Import necessary types/interfaces.
import DeleteModal from "./DeleteModal";

// Todo component takes task, deleteTodo, editTodo, and toggleComplete as props.
export const Todo: React.FC<TodoProps> = ({
  task,
  deleteTodo,
  editTodo,
  toggleComplete,
}) => {
  // State to manage copy notification and delete modal.
  const [showCopyNotification, setShowCopyNotification] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // Function to copy the task text to the clipboard.
  const copyTodoToClipboard = () => {
    navigator.clipboard.writeText(task.task).then(() => {
      setShowCopyNotification(true);

      // Hide the notification after a delay.
      setTimeout(() => {
        setShowCopyNotification(false);
      }, 500);
    });
  };

  return (
    <div className="bg-purple-600 w-full sm:w-[50%] text-white rounded p-3 mb-4 flex justify-between items-center">
      <p
        className={`${
          task.completed ? "line-through text-purple-300" : "cursor-pointer"
        }`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div>
        {/* Edit task button */}
        <FontAwesomeIcon
          className="cursor-pointer ml-3"
          icon={faPenToSquare}
          onClick={() => editTodo(task.id)}
        />
        {/* Delete task button */}
        <FontAwesomeIcon
          className="cursor-pointer ml-3"
          icon={faTrash}
          onClick={() => setIsDeleteModalOpen(true)}
          data-testid="delete-button"
        />
        {/* Copy task text to clipboard button */}
        <FontAwesomeIcon
          className="cursor-pointer ml-3"
          icon={faCopy}
          onClick={copyTodoToClipboard}
          data-testid="copy-button"
        />
      </div>
      {/* Copy notification display */}
      {showCopyNotification && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 text-white z-50">
          <div
            className="bg-purple-500 p-4 rounded"
            data-testid="Copied to clipboard!"
          >
            Copied to clipboard!
          </div>
        </div>
      )}
      {/* Delete Modal component */}
      <DeleteModal
        isOpen={isDeleteModalOpen}
        close={() => setIsDeleteModalOpen(false)}
        deleteAction={() => {
          deleteTodo(task.id);
          setIsDeleteModalOpen(false);
        }}
        text={`Are you sure you want to delete "${task.task}"?`}
        data-testid="confirm-delete-button"
      />
    </div>
  );
};

export default Todo;
