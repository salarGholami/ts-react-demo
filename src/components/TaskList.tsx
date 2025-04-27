type Props = {
  taskList: {
    id: number;
    title: string;
  }[];
};

function TaskList({ taskList }: Props) {
  return (
    <div>
      <h2>TaskList </h2>
      <div>
        {taskList.map((task) => {
          return <li key={task.id}>{task.title}</li>;
        })}
      </div>
      ;
    </div>
  );
}

export default TaskList;
