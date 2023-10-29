import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { TodoWrapper } from "../components/TodoWrapper";

describe("TodoWrapper component", () => {
  it("renders the component", () => {
    render(<TodoWrapper />);
    const titleElement = screen.getByText("Get Things Done!");
    expect(titleElement).toBeInTheDocument();
  });

  it("displays search input when search icon is clicked", () => {
    render(<TodoWrapper />);
    const searchIcon = screen.getByTestId("search-icon");
    fireEvent.click(searchIcon);

    const searchInput = screen.getByTestId("search-input");
    expect(searchInput).toBeInTheDocument();
  });
});
