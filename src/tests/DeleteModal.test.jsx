import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DeleteModal from "../components/DeleteModal";

// Mock functions for close and deleteAction
const mockClose = vi.fn();
const mockDeleteAction = vi.fn();

const text = "Are you sure you want to delete this item?";

test("renders DeleteModal component when isOpen is true", () => {
  const { getByText, getByTestId } = render(
    <DeleteModal
      isOpen={true}
      close={mockClose}
      deleteAction={mockDeleteAction}
      text={text}
    />,
  );

  // Ensure that the modal is rendered when isOpen is true.
  const modal = getByTestId("delete-modal");
  expect(modal).toBeInTheDocument();

  // Check if the modal text is present.
  const modalText = getByText(text);
  expect(modalText).toBeInTheDocument();
});

test("calls close function when the close button is clicked", () => {
  const { getByText } = render(
    <DeleteModal
      isOpen={true}
      close={mockClose}
      deleteAction={mockDeleteAction}
      text={text}
    />,
  );

  const closeButton = getByText("X");

  // Simulate a click on the close button.
  fireEvent.click(closeButton);

  // Ensure that the close function is called.
  expect(mockClose).toHaveBeenCalledTimes(1);
});

test("calls deleteAction function when the delete button is clicked", () => {
  const { getByText } = render(
    <DeleteModal
      isOpen={true}
      close={mockClose}
      deleteAction={mockDeleteAction}
      text={text}
    />,
  );

  const deleteButton = getByText("DELETE");

  // Simulate a click on the delete button.
  fireEvent.click(deleteButton);

  // Ensure that the deleteAction function is called.
  expect(mockDeleteAction).toHaveBeenCalledTimes(1);
});
