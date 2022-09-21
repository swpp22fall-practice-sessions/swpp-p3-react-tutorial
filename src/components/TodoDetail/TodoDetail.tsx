import "./TodoDetail.css";

type IProps = {
  title: string,
  content: string,
};


export default function TodoDetail(props: IProps){
  return (
    <div className="TodoDetail">
      <div className="row">
        <div className="left">Name:</div>
        <div className="right">{props.title}</div>
      </div>
      <div className="row">
        <div className="left">Content:</div>
        <div className="right">{props.content}</div>
      </div>
    </div>
  )
};
