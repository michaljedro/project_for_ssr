import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoForm from "../components/ToDoForm";
import { TodoProvider } from "../Context/ToDoContext";
import { ThemeProvider } from "../Context/ThemeStore";

describe("ToDoForm", () => {
  it("renders input placeholder correctly", () => {
    render(
      <TodoProvider>
        <ThemeProvider>
          <ToDoForm />
        </ThemeProvider>
      </TodoProvider>
    );
    const inputElement = screen.getByPlaceholderText("Create a new todo...");
    expect(inputElement).toBeInTheDocument();
  });

  it("adds new todo when 'Enter' key is pressed", () => {
    render(
      <TodoProvider>
        <ThemeProvider>
          <ToDoForm />
        </ThemeProvider>
      </TodoProvider>
    );
    const inputElement = screen.getByPlaceholderText("Create a new todo...");
    const initialTodos = screen.getAllByRole("listitem");
    const newTodoText = "Test todo";
    userEvent.type(inputElement, `${newTodoText}{enter}`);
    const updatedTodos = screen.getAllByRole("listitem");
    expect(updatedTodos.length).toBe(initialTodos.length + 1);
    expect(updatedTodos[updatedTodos.length - 1]).toHaveTextContent(
      newTodoText
    );
  });

  it("toggles theme when theme button is clicked", () => {
    render(
      <TodoProvider>
        <ThemeProvider>
          <ToDoForm />
        </ThemeProvider>
      </TodoProvider>
    );
    const themeButton = screen.getByRole("button");
    const initialTheme = screen.getByTestId("background-image");
    fireEvent.click(themeButton);
    const updatedTheme = screen.getByTestId("background-image");
    expect(initialTheme).toHaveStyle({ backgroundColor: "#f2f2f2" });
    expect(updatedTheme).toHaveStyle({ backgroundColor: "#222" });
  });
});
