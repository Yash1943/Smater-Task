import "./TaskCard.css";
import { TaskItem } from "./type";

// interface TaskProps {
//   title?: string;
//   dueDate?: string;
//   description?: string;
// }

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
  return (
    <div className="TaskItem shadow-md border border-slate-100 bg-gray-200 ">
      <h2 className="text-xl font-bold my-1 p-2">Title : {props.title}</h2>
      <p className="text-sm my-2 p-2">dueDate : {props.dueDate}</p>
      <p className="text-sm my-2 p-2">description : {props.description}</p>
    </div>
  );
};

export default Task;
