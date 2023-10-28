import React from "react";

// The DeleteModal component accepts props for its behavior and appearance.
// - isOpen: Indicates whether the modal is open or closed.
// - close: Function to close the modal.
// - deleteAction: Function to handle the delete action.
// - text: Text to display in the modal.

const DeleteModal = ({ isOpen, close, deleteAction, text }) => {
  return (
    <div
      className={`
        fixed inset-0 flex items-center justify-center bg-gray-200 text-black
        ${isOpen ? "block" : "hidden"}
      `}
    >
      <div className="px-6 rounded-lg bg-white flex flex-col shadow-md p-4">
        {/* Close button */}
        <div className="flex text-2xl font-bold justify-end">
          <button onClick={close}>X</button>
        </div>

        <div className="text-center mt-3">
          {/* Modal title */}
          <h1 className="text-2xl font-semibold">Delete Confirmation</h1>
        </div>

        <div className="flex-grow mt-3 text-xl text-center">
          {/* Text content */}
          <p>{text}</p>
        </div>

        <div className="flex justify-center mt-3">
          {/* Delete button */}
          <button
            onClick={deleteAction}
            className="w-full py-2 px-4 bg-red-500 hover:bg-red-300 text-red-50 rounded-md"
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
