import "./App.css";
import TaskHeader from "./components/TaskHeader";
import TaskList from "./components/props/TaskList";
import User from "./components/props/User";

const user = {
  firstName: "Salar",
  lastName: "Gholami",
};

const tasks = [
  {
    id: 1,
    title: "title #1",
  },
  {
    id: 2,
    title: "title #2",
  },
  {
    id: 3,
    title: "title #3",
  },
];

function App() {
  return (
    <>
      <TaskHeader name="Salar" numOfTasks={2} />
      <User user={user} />
      <TaskList taskList={tasks} />
    </>
  );
}

export default App;
