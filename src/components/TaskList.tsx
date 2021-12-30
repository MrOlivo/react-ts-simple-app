import { Task } from "../interfaces/Task.Interface";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteATask: (id: number) => void;
}

export default function TaskList({ tasks, deleteATask }: Props) {
  let sortedTasks = [...tasks];
  sortedTasks = tasks.sort((a, b) =>
    a.completed === b.completed ? 0 : a.completed ? 1 : -1
  );

  console.log(sortedTasks);

  return (
    <>
      <h3>All tasks</h3>
      {sortedTasks.map((task) => (
        <div className="col-md-6 pb-2" key={task.id.valueOf()}>
          <TaskCard task={task} deleteATask={deleteATask} />
        </div>
      ))}
    </>
  );
}
