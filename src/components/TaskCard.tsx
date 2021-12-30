import { Task } from "../interfaces/Task.Interface";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

export default function TaskCard({ task, deleteATask }: Props) {
  return (
    <div className="alert alert-dismissible alert-primary">
      <button
        type="button"
        className="btn-close"
        onClick={() => deleteATask(task.id.valueOf())}
      ></button>
      <h4 className="alert-heading">{task.title}</h4>
      <p>{task.description}</p>
    </div>
  );
}
