import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TodoList from "./containers/TodoList/TodoList";
import NewTodo from "./containers/TodoList/NewTodo/NewTodo";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="todos" element={<TodoList title={"My TODOs!"} />} />
      {/* <Route path="/todos/:id" element={<TodoDetail />} /> */}
      <Route path="new-todo" element={<NewTodo />} /> </Routes>
      <Route path="/" element={<Navigate replace to={"/todos"} />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </BrowserRouter>
  </div>;
}

export default App;
