import "./Todo.css"
import React from "react";

interface IProps {
  title: string,
  clicked?: React.MouseEventHandler<HTMLDivElement>;  // Defined by React
  done: boolean;
}

export default function Todo(props: IProps){
  return (
    <div className="Todo">
      <div className={`text ${props.done && "done"}`} onClick={props.clicked}>
        {props.title}
      </div>
      {props.done && <div className="done-mark">&#x2713;</div>}
    </div>
  );
};
