import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoProvider } from "../Context/ToDoContext";

describe("TodoContext", () => {
  it("should render the TodoContext provider with no todos", () => {
    render(
      <TodoProvider>
        <div>Test</div>
      </TodoProvider>
    );
    const todoList = screen.queryByRole("list");
    expect(todoList).not.toBeInTheDocument();
  });

  it("should add a new todo to the list", async () => {
    render(
      <TodoProvider>
        <div>Test</div>
      </TodoProvider>
    );
    const addTodoButton = screen.getByRole("button", { name: /add todo/i });
    const input = screen.getByRole("textbox");
    userEvent.type(input, "New todo item");
    userEvent.click(addTodoButton);
    const todoItem = await screen.findByText(/New todo item/i);
    expect(todoItem).toBeInTheDocument();
  });

  it("should mark a todo as completed", async () => {
    render(
      <TodoProvider>
        <div>Test</div>
      </TodoProvider>
    );
    const addTodoButton = screen.getByRole("button", { name: /add todo/i });
    const input = screen.getByRole("textbox");
    userEvent.type(input, "New todo item");
    userEvent.click(addTodoButton);
    const checkbox = await screen.findByRole("checkbox");
    userEvent.click(checkbox);
    const completedTodo = await screen.findByText(/New todo item/i);
    expect(completedTodo).toHaveClass("completed");
  });

  it("should delete a todo item", async () => {
    render(
      <TodoProvider>
        <div>Test</div>
      </TodoProvider>
    );
    const addTodoButton = screen.getByRole("button", { name: /add todo/i });
    const input = screen.getByRole("textbox");
    userEvent.type(input, "New todo item");
    userEvent.click(addTodoButton);
    const deleteButton = await screen.findByRole("button", { name: /delete/i });
    userEvent.click(deleteButton);
    const todoItem = screen.queryByText(/New todo item/i);
    expect(todoItem).not.toBeInTheDocument();
  });
});
