import "./App.css";
import TodoList from "./containers/TodoList/TodoList";
import NewTodo from "./containers/TodoList/NewTodo/NewTodo";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoDetail from "./components/TodoDetail/TodoDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="todos" element={<TodoList title={"My TODOs!"} />} />
          <Route path="/todos/:id" element={<TodoDetail />} />
          <Route path="new-todo" element={<NewTodo />} />
          <Route path="/" element={<Navigate replace to={"/todos"} />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
