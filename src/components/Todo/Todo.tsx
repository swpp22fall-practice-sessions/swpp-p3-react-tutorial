import "./Todo.css"

interface IProps{
    title: string;
    clicked?: React.MouseEventHandler<HTMLDivElement>;
    done: boolean;
}

const Todo = ({ title, clicked, done }: IProps) => {
    return (
        <div className="Todo">
            <div className={`text ${done && "done"}`} onClick={clicked}>
                {title}
            </div>
            {done && <div className="done-mark">&#x2713;</div>}
        </div>
    );
};

export default Todo;