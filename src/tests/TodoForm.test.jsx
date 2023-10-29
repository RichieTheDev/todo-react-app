import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { vi } from "vitest";
import TodoForm from "../components/TodoForm";

// Mock the addTodo function
const mockAddTodo = vi.fn();

const setup = () => {
  const utils = render(<TodoForm addTodo={mockAddTodo} />);
  const input = utils.getByPlaceholderText("What is the task today?");
  const addButton = utils.getByText("Add Task");
  return {
    input,
    addButton,
    ...utils,
  };
};

test("renders the TodoForm component", () => {
  const { input, addButton } = setup();

  expect(input).toBeInTheDocument();
  expect(addButton).toBeInTheDocument();
});

test("handles input change correctly", () => {
  const { input } = setup();

  fireEvent.change(input, { target: { value: "New task" } });
  expect(input.value).toBe("New task");
});

test("submits the form and calls addTodo", () => {
  const { input, addButton } = setup();

  // Set input value
  fireEvent.change(input, { target: { value: "New task" } });

  // Simulate form submission
  fireEvent.click(addButton);

  // Expect addTodo to be called with the input value
  expect(mockAddTodo).toHaveBeenCalledWith("New task");

  // Input field should be cleared after submission
  expect(input.value).toBe("");
});
