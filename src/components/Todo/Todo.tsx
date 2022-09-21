import "./Todo.css";

interface IProps {
  title: string;
  clicked?: React.MouseEventHandler<HTMLDivElement>;
  done: boolean;
}

const Todo = (props: IProps) => {
  const { title, clicked, done } = props;

  return (
    <div className="Todo">
      <div className={`text ${props.done && "done"}`} onClick={clicked}>
        {title}
      </div>
      {done && <div className="done-mark">&#x2713;</div>}
    </div>
  );
};

export default Todo;
