import "./TodoDetail.css";

type Props = {
    title: string;
    content: string;
};

const TodoDetail = ({ title, content }: Props) => {
    return (
        <div className="TodoDetail">
            <div className="row">
                <div className="left">Name:</div>
                <div className="right">{title}</div>
            </div>
            <div className="row">
                <div className="left">Content:</div>
                <div className="right">{content}</div>
            </div>
        </div>
    );
};

export default TodoDetail;

