import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../interfaces/Task.Interface";

interface Props {
  addANewTask: (task: Task) => void;
}

type HandleInputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const initialState = { title: "", description: "" };

export default function TaskForm({ addANewTask }: Props) {
  const [task, setTask] = useState(initialState);

  const handleInputChange = ({
    target: { name, value },
  }: HandleInputChange) => {
    setTask({ ...task, [name]: value });
  };

  const getCurrentTimestamp = (): number => new Date().getTime();

  const handleNewTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addANewTask({ id: getCurrentTimestamp(), ...task, completed: false });
    setTask(initialState);
  };

  return (
    <div className="card border-primary">
      <div className="card-body">
        <h4 className="card-title">Add Task</h4>
        <form onSubmit={handleNewTask}>
          <input
            type="text"
            placeholder="Write a title"
            name="title"
            className="form-control mb-3"
            onChange={handleInputChange}
            value={task.title}
            required
          />
          <textarea
            name="description"
            rows={2}
            placeholder="Write a description"
            className="form-control mb-3"
            onChange={handleInputChange}
            value={task.description}
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Add task
          </button>
        </form>
      </div>
    </div>
  );
}
