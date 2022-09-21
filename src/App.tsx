import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import NewTodo from "./containers/TodoList/NewTodo/NewTodo";
import TodoList from "./containers/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/todos" element={<TodoList title={"My TODOs!"} />} />
          <Route path="/new-todo" element={<NewTodo />} />
          <Route path="/" element={<Navigate replace to={"/todos"} />} />
          <Route path="*" element={<h1>Not Found</h1>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
