import { useMemo, useState } from 'react';
import { Todo } from '../../components/Todo/Todo';
import './TodoList.css'
import { TodoDetail } from '../../components/TodoDetail/TodoDetail';
import { NewTodo } from './NewTodo/NewTodo';
import { Link, NavLink } from 'react-router-dom'

type TodoType = {
    id: number
    title: string
    content: string
    done: boolean
}

interface Props {
    title: string
}

export const TodoList = (props: Props) => {
    const { title } = props
    const [todos, setTodos] = useState<TodoType[]>([
        { id: 1, title: "SWPP", content: "take swpp class", done: true },
        { id: 2, title: "Movie", content: "watch movie", done: false },
        { id: 3, title: "Dinner", content: "eat dinner", done: false },
    ])
    const [selectedTodo, setSelectedTodo] = useState<TodoType | null>(null)
    const todoDetail = useMemo(() => {
        return selectedTodo ? (<TodoDetail title={selectedTodo.title} content={selectedTodo.content}/>) : null
    }, [selectedTodo])

    const clickTodoHandler = (td: TodoType) => {
        setSelectedTodo(td ?? null)
    }

    return <div className="TodoList">
        <div className="title">{title}</div>
        <div className="todos">
            {todos.map((td) => {
                return <Todo
                    title={td.title}
                    done={td.done}
                    clicked={() => clickTodoHandler(td)}
                />
            })}
            {todoDetail}
            <NavLink to={'/new-todo'}>New Todo</NavLink>
        </div>
    </div>
}
