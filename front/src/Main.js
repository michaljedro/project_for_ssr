import { TodoProvider } from "./Context/ToDoContext";
import { ThemeStore } from "./Context/ThemeStore";
import Theme from "./styles/Global";
import DoForm from "./components/DoForm";
function Main() {
  return (
    <ThemeStore>
      <Theme>
        <TodoProvider>
          <nav>
            <DoForm />
          </nav>
        </TodoProvider>
      </Theme>
    </ThemeStore>
  );
}

export default Main;
