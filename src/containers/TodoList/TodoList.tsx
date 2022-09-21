import { useState } from "react";
import "./TodoList.css";
import Todo from "../../components/Todo/Todo";

type TodoType = { id: number; title: string; content: string; done: boolean };

interface IProps {
  title: string;
}

export default function TodoList(props: IProps) {
  const { title } = props;
  const [todos, setTodos] = useState<TodoType[]>([
    { id: 1, title: "SWPP", content: "take swpp class", done: true },
    { id: 2, title: "Movie", content: "watch movie", done: false },
    { id: 3, title: "Dinner", content: "eat dinner", done: false },
  ]);
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);

  const clickTodoHandler = (td: TodoType) => {
    if (selectedTodo === td) {
      setSelectedTodo(null);
    } else {
      setSelectedTodo(td);
    }
  };

  return (
    <div className="TodoList">
      <div className="title">{title}</div>
      <div className="todos">
        Looks like...
        {todos.map((td) => {
          return (
            <Todo
              title={td.title}
              done={td.done}
              clicked={() => clickTodoHandler(td)}
            />
          );
        })}
      </div>
    </div>
  );
}
