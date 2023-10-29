import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { EditTodoForm } from "../components/EditTodoForm";

// Mock the editTodo function
const mockEditTodo = vi.fn();

const mockTask = {
  id: 1,
  task: "Test Task",
};

test("renders EditTodoForm component with an input field and a submit button", () => {
  const { getByPlaceholderText, getByText } = render(
    <EditTodoForm editTodo={mockEditTodo} task={mockTask} />,
  );

  // Ensure that the input field and submit button are present in the rendered component.
  const inputElement = getByPlaceholderText("Update task");
  const submitButton = getByText("Update Task");

  expect(inputElement).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("updates input value when the user types", () => {
  const { getByPlaceholderText } = render(
    <EditTodoForm editTodo={mockEditTodo} task={mockTask} />,
  );

  const inputElement = getByPlaceholderText("Update task");

  // Simulate a user typing in the input field.
  fireEvent.change(inputElement, { target: { value: "New Task" } });

  // Ensure that the input value is updated.
  expect(inputElement.value).toBe("New Task");
});

test("calls editTodo when the form is submitted", () => {
  const { getByPlaceholderText, getByText } = render(
    <EditTodoForm editTodo={mockEditTodo} task={mockTask} />,
  );

  const inputElement = getByPlaceholderText("Update task");
  const submitButton = getByText("Update Task");

  // Simulate a user typing in the input field and submitting the form.
  fireEvent.change(inputElement, { target: { value: "New Task" } });
  fireEvent.click(submitButton);

  // Ensure that the editTodo function is called with the updated value and task ID.
  expect(mockEditTodo).toHaveBeenCalledWith("New Task", mockTask.id);
});
