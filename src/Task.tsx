import "./TaskCard.css";
import { TaskItem } from "./type";

interface TaskProps {
  id: string;
  title: string;
  dueDate: string;
  description: string;
  removeTask: (tid: number) => void;
}

// class Task extends React.Component<TaskProps> {
//   render() {
//     return (
//       <div className="TaskItem shadow-md border border-slate-100 bg-gray-200 ">
//         <h2 className="text-xl font-bold my-1 p-2">Title : {this.props.title}</h2>
//         <p className="text-sm my-2 p-2">dueDate : {this.props.dueDate}</p>
//         <p className="text-sm my-2 p-2">description : {this.props.description}</p>
//       </div>
//     );
//   }
// }

// export default Task;

const Task = (props: TaskItem) => {
  function removeTask(id: string): void {
    throw new Error("Function not implemented.");
  }

  // const { item, removeTask } = props;
  return (
    <div className="TaskItem shadow-md border border-slate-100 bg-gray-200 ">
      <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div>
          <a href={`/tasks/${props.id || ""}`}>
            <h2 className="text-xl font-bold my-1 p-2">Title : {props.title}</h2>
          </a>
          <p className="text-sm my-2 p-2">dueDate : {props.dueDate}</p>
          <p className="text-sm my-2 p-2">description : {props.description}</p>
        </div>
        <button
          className="deleteTaskButton cursor-pointer flex items-center justify-center h-4 w-4 rounded-full my-5 mr-5"
          onClick={() => removeTask(props.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;
