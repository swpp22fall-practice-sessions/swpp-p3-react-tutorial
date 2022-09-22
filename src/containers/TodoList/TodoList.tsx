import { useState, useMemo } from "react";
import {NavLink} from "react-router-dom";
import Todo from '../../components/Todo/Todo';
import TodoDetail from '../../components/TodoDetail/TodoDetail';
import NewTodo from './NewTodo/NewTodo';
import "./TodoList.css"
interface IProps {
  title: string;
}

type TodoType = {id: number; title: string; content: string; done: boolean;};

export default function TodoList(props: IProps) {
  const {title} = props
  const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
  const clickTodohandler = (td: TodoType) => {
    if (selectedTodo == td) {
      setSelectedTodo(null)
    } else{
      setSelectedTodo(td)
    }
  }
  const [todos, setTodos] = useState<TodoType[]>([
    {id: 1, title: "SWPP", content: "take swpp class", done: true},
    {id: 2, title: "Movie", content: "watch movie", done: false},
    {id: 3, title: "Dinner", content: "eat dinner", done: false},
  ])
  const todoDetail = useMemo(() => {
    return selectedTodo ? (
      <TodoDetail title={selectedTodo.title} content={selectedTodo?.content} />
    ) : null;
  }, [selectedTodo]);
  return (
    <div className="TodoList">
      <div className="title">{title}</div>
      <div className="todos">
        {todos.map((td) => {
          return <Todo title={td.title} done={td.done} clicked={() => clickTodohandler(td)} />
        })}
        {todoDetail}
        <NavLink to="/new-todo" > New Todo</NavLink>
      </div>
    </div>
  );
}

