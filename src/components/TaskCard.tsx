import { Task } from "../interfaces/Task.Interface";

interface Props {
  task: Task;
  deleteATask: (id: number) => void;
}

export default function TaskCard({ task, deleteATask }: Props) {
  return (
    <div className="card border-primary">
      <div className="card-body">
        <h4 className="card-title">{task.title}</h4>
        <p className="d-none">{task.id}</p>
        <p>{task.description}</p>
        <button
          className="btn btn-danger"
          onClick={() => deleteATask(task.id.valueOf())}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
