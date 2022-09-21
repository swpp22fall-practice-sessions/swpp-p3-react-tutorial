import './Todo.css'

interface Props {
    title: string
    clicked?: React.MouseEventHandler<HTMLDivElement>
    done: boolean
}

export const Todo = (props: Props) => {
    return (
        <div className="Todo">
            <div className={`text ${props.done && "done"}`} onClick={props.clicked}>
                {props.title}
            </div>
            {props.done && <div className="done-mark">&#x2713;</div>}
        </div>
    )
}
