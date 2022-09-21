import { useState } from "react";
import { useNavigate } from "react-router";
import "./NewTodo.css";

const NewTodo = () => {
    const navigate = useNavigate();
    const [ title, setTitle ] = useState<string>("");
    const [ content, setContent ] = useState<string>("");
    const [ submitted, setSubmitted ] = useState<boolean>(false);

    const postTodoHandler = () => {
        const data = { title, content };
        alert("Submitted\n" + data.title + "\n" + data.content);
        setSubmitted(true);
        navigate('/todos');
    };

    return (
        <div className="NewTodo">
            <h1>Add a Todo</h1>
            <label>Title</label>
            <input 
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <label>Content</label>
            <textarea 
                rows={4}
                value={content}
                onChange={e => setContent(e.target.value)}
            />
            <button onClick={postTodoHandler}>Submit</button>
        </div>
    );
};

export default NewTodo;