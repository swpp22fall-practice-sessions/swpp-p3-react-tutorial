import {BrowserRouter, Routes, Route } from "react-router-dom";

import TodoList from "./containers/TodoList/TodoList";
import NewTodo from "./containers/TodoList/NewTodo/NewTodo";

import "./App.css";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="todos" element={<TodoList title={"My TODOs!"}/>}></Route>
        <Route path="new-todo" element={<NewTodo />}></Route>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;
