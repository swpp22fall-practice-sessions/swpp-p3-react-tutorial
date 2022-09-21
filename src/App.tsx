import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import TodoDetail from "./components/TodoDetail/TodoDetail";
import NewTodo from "./containers/TodoList/NewTodo/NewTodo";
import TodoList from "./containers/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to={"/todos"} />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/todos" element={<TodoList title={"My TODOs!"} />} />
          <Route path="/todos/:id" element={<TodoDetail title={"Dummy"} content={"Do nothing"} />} />
          <Route path="/new-todo" element={<NewTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
