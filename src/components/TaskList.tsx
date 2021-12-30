import { Task } from "../interfaces/Task.Interface";
import TaskCard from "./TaskCard";

interface Props {
  tasks: Task[];
  deleteATask: (id: number) => void;
}

export default function TaskList({ tasks, deleteATask }: Props) {
  return (
    <>
      <h3>All tasks</h3>
      {tasks.map((task) => (
        <div className="col-md-4 pb-2" key={task.id.valueOf()}>
          <TaskCard task={task} deleteATask={deleteATask} />
        </div>
      ))}
    </>
  );
}
