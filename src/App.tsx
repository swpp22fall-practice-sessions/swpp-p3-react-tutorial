import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewTodo from "./containers/TodoList/NewTodo/NewTodo";
import TodoList from "./containers/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="todos" element={<TodoList title={"My TODOs!"} />} />
          <Route path="new-todo" element={<NewTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
