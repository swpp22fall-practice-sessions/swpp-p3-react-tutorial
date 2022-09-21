import "./App.css";
import TodoList from "./containers/TodoList/TodoList";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import NewTodo from "./containers/TodoList/NewTodo/NewTodo";

function App() {
  return <div className="App">
  <BrowserRouter>
  <Routes>
     <Route path="/todos" element={<TodoList title={"My TODOs!"} />} />
     <Route path="/new-todo" element={<NewTodo />} />
     <Route path="/todos/:id" element={<TodoDetail />} />
     <Route path="/" element={<Navigate         to={"/todos"} />} />
    </Routes>
  </BrowserRouter>
</div>
}

export default App;
