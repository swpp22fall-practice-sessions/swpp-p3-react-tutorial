import { useMemo, useState } from "react";
import { NavLink } from "react-router-dom";
import Todo from "../../components/Todo/Todo";
import TodoDetail from "../../components/TodoDetail/TodoDetail";
import "./TodoList.css";

interface IProps{
    title: string;
}

type TodoType = {
    id: number;
    title: string;
    content: string;
    done: boolean;
};

const TodoList = ({ title }: IProps) => {
    const [ todos, setTodos ] = useState<TodoType[]>([
        { id: 1, title: "SWPP", content: "take swpp class", done: false },
        { id: 2, title: "Movie", content: "watch movie", done: true },
        { id: 3, title: "Dinner", content: "eat dinner", done: true },
    ]);

    const [ selectedTodo, setSelectedTodo ] = useState<TodoType | null>(null);

    const clickTodoHandler = (td: TodoType) => {
        if(selectedTodo === td) setSelectedTodo(null);
        else setSelectedTodo(td);
    };

    const todoDetail = useMemo(() => {
        return selectedTodo ? (
            <TodoDetail title={selectedTodo.title} content={selectedTodo.content} />
        ) : null;
    }, [selectedTodo]);

    return (
        <div className="TodoList">
            <div className="title">{title}</div>
            <div className="todos">
                {todos.map((td) => <Todo key={td.id} title={td.title} done={td.done} clicked={() => clickTodoHandler(td)} />)}
                {todoDetail}
                <NavLink to="/new-todo">New Todo</NavLink>
            </div>
        </div>
    );
};

export default TodoList;