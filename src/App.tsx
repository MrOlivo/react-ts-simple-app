import "./App.css";
import logo from "./logo.svg";
import { Task } from "./interfaces/Task.Interface";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { useLocalStorage } from "./hooks/useLocalStorage";

interface Props {
  title?: string;
}

export function App({ title }: Props) {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", [
    {
      id: 1,
      title: "Add more tasks",
      description: "Use the form for add more tasks",
      completed: false,
    },
  ]);

  const addANewTask = (task: Task) => setTasks([...tasks, task]);

  const deleteATask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  console.log(tasks);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="React Logo" style={{ width: "4rem" }} />
            {title}
          </a>
        </div>
      </nav>
      <main className="container p-4">
        <div className="row">
          <div className="col-md-4 mt-4">
            <TaskForm addANewTask={addANewTask} />
          </div>
          <div className="col-md-8 mt-4">
            <div className="row">
              <TaskList tasks={tasks} deleteATask={deleteATask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
