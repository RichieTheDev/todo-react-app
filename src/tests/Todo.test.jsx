import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Todo from "../components/Todo";
import { vi } from "vitest";

// Mock the necessary props
const mockTodo = {
  id: 1,
  task: "Test Task",
  completed: false,
};
const mockDeleteTodo = vi.fn();
const mockEditTodo = vi.fn();
const mockToggleComplete = vi.fn();

describe("Todo component", () => {
  it("renders task text", () => {
    const { getByText } = render(
      <Todo
        task={mockTodo}
        deleteTodo={mockDeleteTodo}
        editTodo={mockEditTodo}
        toggleComplete={mockToggleComplete}
      />,
    );

    const taskText = getByText("Test Task");
    expect(taskText).toBeInTheDocument();
  });

  it("calls toggleComplete when task text is clicked", () => {
    const { getByText } = render(
      <Todo
        task={mockTodo}
        deleteTodo={mockDeleteTodo}
        editTodo={mockEditTodo}
        toggleComplete={mockToggleComplete}
      />,
    );

    const taskText = getByText("Test Task");
    fireEvent.click(taskText);
    expect(mockToggleComplete).toHaveBeenCalledWith(mockTodo.id);
  });
});
