interface IProps {
  title: string;
}
export default function TodoList(props: IProps) {
  const { title } = props;
  return <div className="TodoList">{title}</div>;
}
