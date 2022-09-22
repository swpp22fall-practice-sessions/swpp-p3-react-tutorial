import { useState} from "react";
import { Navigate} from "react-router";
import "./NewTodo.css"

const postTodoHandler = () => {
    const data = {title: title, content: content};
    alert("Submitted\n" + data.title + "\n" + data.content);
    setSubmitted(true);
}

export default function NewTodo() {
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [submitted, setSubmitted] = useState<boolean>(false);

    if (submitted) {
        return <Navigate to="/todos" />;
    }

    return (
        <div className="NewTodo">
            <h1>Add a Todo</h1>
            <label>Title</label>
            <input
                type="text"
                value={title}
                onChange={
                    (event) => setTitle(event.target.value)
                }
            />
        </div>
    );
}
