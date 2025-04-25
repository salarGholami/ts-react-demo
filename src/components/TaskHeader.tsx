// props => object !!

type TaskHeaderProps = {
  name: string;
  numOfTasks: number;
};

export default function TaskHeader(props: TaskHeaderProps) {
  return (
    <h2>
      `hi {props.name}, you have {props.numOfTasks} uncompleted task .`
    </h2>
  );
}
