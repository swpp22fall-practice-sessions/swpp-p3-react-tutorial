import "./App.css";
import TodoList from "./containers/TodoList/TodoList";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Todo from "./components/Todo/Todo";
import NewTodo from "./containers/TodoList/NewTodo/NewTodo";

function App() {
  return <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="todos" element={<Todo title={"MyTODOS!"} /> } />
        <Route path="new-todo" element={<NewTodo />} />
      </Routes>
      <TodoList title={"My Todos!"}/>

    </BrowserRouter>

  </div>;
}

export default App;
