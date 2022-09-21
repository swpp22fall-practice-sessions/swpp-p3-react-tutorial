import "./App.css";
import TodoList from "./containers/TodoList/TodoList"; // can omit.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return <div className="App"><TodoList title={"My TODOs!"} /></div>;
}

export default App;