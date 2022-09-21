import "./Todo.css"

interface Iprops {
    title: string;
    clicked?: React.MouseEventHandler<HTMLDivElement>;
    done: boolean;
}

const Todo = (props: Iprops) => {
    return (
        <div className="Todo">
            <div className={'text ${props.done && "done"}'} onClick={props.clicked}>
                {props.title}
            </div>
            {props.done && <div className="done-mark">&#x2713;</div>}
        </div>
    );
};

export default Todo;