import "./App.css";
import TodoList from "./containers/TodoList/TodoList"; // can omit.js

function App() {
  return (
    <div className="App">
      <TodoList title={"My TODOs!"} />
    </div>
  );
}

export default App;

<div className="TodoList"></div>;
/* actually, it uses className, not class to avoid collision btw JS class
 * this syntax is compiled to React.createElement(‘div’, {className: ‘TodoList’})
 * by React Transpiler.
 * );
 */
