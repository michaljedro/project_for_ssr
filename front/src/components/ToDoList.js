import React, { useContext } from "react";
import { TodoContext } from "../Context/ToDoContext";
import ToDo from "./ToDo";
import {
  ItemsActivity,
  BoxActivityItems,
  ButtonCompleted,
  MobileActivityItems,
  SpanAction,
  TodoList,
  SpanLeft,
} from "../styles/ToDoList.styled";
import { ThemeContext } from "../Context/ThemeStore";
import { useState } from "react";

function ToDoList() {
  const { theme } = useContext(ThemeContext);
  const {
    todoList,
    deleteMany,
    activeTodos,
    completedTodos,
  } = useContext(TodoContext);
  const [active, setActive] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleDelete = () => {
    const checkedIds = todoList
      .filter((todo) => todo.completed)
      .map((todo) => todo._id);
    deleteMany(checkedIds);
  };
  const handleAll = () => {
    setActive(false);
    setCompleted(false);
  };
  const handleActive = () => {
    setActive(true);
    setCompleted(false);
  };
  const handleCompleted = () => {
    setActive(false);
    setCompleted(true);
  };

  let todos = [];

  if (!active && !completed) {
    todos = todoList;
  } else if (active && !completed) {
    todos = activeTodos;
  } else {
    todos = completedTodos;
  }

  return (
    <TodoList>
      <div>
        <div>
          {todos &&
            todos.map((todo) => (
              <ToDo key={`todo_item-${todo._id}`} data={todo} />
            ))}
          <ItemsActivity theme={theme}>
            <SpanLeft>{todos?.length} pozostało...</SpanLeft>
            <BoxActivityItems theme={theme}>
              <button onClick={handleAll}>Wszystko</button>
              <button onClick={handleActive}>Aktywne</button>
              <button onClick={handleCompleted}>Zakończone</button>
            </BoxActivityItems>
            <ButtonCompleted onClick={handleDelete} theme={theme}>
              Wyczyść skończone
            </ButtonCompleted>
          </ItemsActivity>
        </div>
      </div>
      <MobileActivityItems theme={theme}>
        <SpanAction theme={theme}>Wszystko</SpanAction>
        <SpanAction theme={theme}>Aktywne</SpanAction>
        <SpanAction theme={theme}>Zakończone</SpanAction>
      </MobileActivityItems>
    </TodoList>
  );
}

export default ToDoList;
