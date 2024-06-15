import { TodoProvider } from "./Context/ToDoContext";
import { ThemeStore } from "./Context/ThemeStore";
import Theme from "./styles/Global";
import ToDoForm from "./components/DoForm";
import Footer from "./components/Footer";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeStore";
function Main() {
  return (
    <ThemeStore>
      <Theme>
        <TodoProvider>
          <div>
            <ToDoForm />
          </div>
        </TodoProvider>
      </Theme>
    </ThemeStore>
  );
}

export default Main;
