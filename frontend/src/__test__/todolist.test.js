import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToDoList from "../components/ToDoList";
import { TodoContext } from "../Context/ToDoContext";
import { ThemeContext } from "../Context/ThemeStore";

describe("ToDoList component", () => {
  const todoList = [
    {
      _id: 1,
      text: "Task 1",
      completed: false,
    },
    {
      _id: 2,
      text: "Task 2",
      completed: true,
    },
  ];

  const addTodo = jest.fn();
  const deleteTodo = jest.fn();
  const deleteMany = jest.fn();
  const editCompletedTodo = jest.fn();
  const activeTodos = jest.fn();
  const completedTodos = jest.fn();

  const todoContextValue = {
    todoList,
    addTodo,
    deleteTodo,
    deleteMany,
    editCompletedTodo,
    activeTodos,
    completedTodos,
  };

  const theme = {
    primary: "blue",
    secondary: "red",
  };

  it("should render the correct number of todo items", () => {
    render(
      <TodoContext.Provider value={todoContextValue}>
        <ThemeContext.Provider value={{ theme }}>
          <ToDoList />
        </ThemeContext.Provider>
      </TodoContext.Provider>
    );

    const todoItems = screen.getAllByTestId("todo-item");
    expect(todoItems.length).toBe(2);
  });

  it("should switch between active and completed todo items", () => {
    render(
      <TodoContext.Provider value={todoContextValue}>
        <ThemeContext.Provider value={{ theme }}>
          <ToDoList />
        </ThemeContext.Provider>
      </TodoContext.Provider>
    );

    const activeButton = screen.getByRole("button", { name: "Active" });
    const completedButton = screen.getByRole("button", { name: "Completed" });

    userEvent.click(activeButton);

    const activeTodoItems = screen.getAllByTestId("todo-item");
    expect(activeTodoItems.length).toBe(1);

    userEvent.click(completedButton);

    const completedTodoItems = screen.getAllByTestId("todo-item");
    expect(completedTodoItems.length).toBe(1);
  });

  it("should clear completed todo items", () => {
    render(
      <TodoContext.Provider value={todoContextValue}>
        <ThemeContext.Provider value={{ theme }}>
          <ToDoList />
        </ThemeContext.Provider>
      </TodoContext.Provider>
    );

    const clearCompletedButton = screen.getByRole("button", {
      name: "Clear Completed",
    });

    userEvent.click(clearCompletedButton);

    expect(deleteMany).toHaveBeenCalledWith([2]);
  });
});
