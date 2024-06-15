import React, { useContext, useRef } from "react";
import {  ToDoBox} from "../styles/ToDo.styled";
import Checkbox from "./Checkbox";
import { ThemeContext } from "../Context/ThemeStore";

function ToDo({ data }) {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <ToDoBox theme={theme}>
      <Checkbox data={data} />
    </ToDoBox>
  );
}

export default ToDo;
