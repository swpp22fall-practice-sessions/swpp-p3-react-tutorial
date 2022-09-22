import {useState, useMemo} from "react";
import { Link, NavLink } from "react-router-dom";

import Todo from '../../components/Todo/Todo';
import TodoDetail from "../../components/TodoDetail/TodoDetail";
import NewTodo from "./NewTodo/NewTodo";

import "./TodoList.css";

type TodoType = {
    id: number;
    title: string;
    content: string;
    done: boolean;
};

interface IProps {
    title: string;
};

export default function TodoList(props: IProps){
    const {title} = props;
    const [todos, setTodos] = useState<TodoType[]>(
        [
            {id: 1, title: "laundry", content: "to the laundry", done:true},
            {id: 2, title: "dishes", content: "to the dishes", done:false},
        ]
    );
    const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null);
    const clickTodoHandler = (todo: TodoType) => {
        if (selectedTodo === todo) {
            setSelectedTodo(null);
        }
        else {
            setSelectedTodo(todo);
        }
    };
    const todoDetail = useMemo(() => {
        return selectedTodo ? (<TodoDetail title={selectedTodo.title} content={selectedTodo.content} />) : null;
    }, [selectedTodo]);
    return <div className="TodoList">
        <div className="title">{title}</div>
        <div className="todos">
            {todos.map((td) => {
                return <Todo key={td.id} title={td.title} done={td.done} clicked={() => clickTodoHandler(td)}/>
            }
            )}
            {todoDetail}
            <NavLink to="/new-todo">New Todo</NavLink>
            <NewTodo />
        </div>
    </div>;
};
