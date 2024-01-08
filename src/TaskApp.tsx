import React, { useEffect } from "react";
import { TaskItem } from "./types";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";

// interface TaskAppProp {}
interface TaskAppState {
  tasks: TaskItem[];
}
// class TaskApp extends React.Component<TaskAppProp, TaskAppState> {
//   constructor(props: TaskAppProp) {
//     super(props);
//     this.state = {
//       tasks: [],
//     };
//   }
//   addTask = (task: TaskItem) => {
//     this.setState((state) => {
//       return {
//         tasks: [...state.tasks, task],
//       };
//     });
//   };
//   render() {
//     return (
//       <div className="container max-w-5xl mx-3 ">
//         <h1 className="text-3xl mb-2 font-bold text-slate-700 ml-14">Smarter Tasks</h1>
//         <h1 className="text-lg mb-6 text-slate-600">
//           <span className="font-bold ml-14">Project</span>
//         </h1>
//         <div className="grid grid-cols items-center justify-center gap-3 ml-14">
//           <div className="border border-slate-200 bg-gray-300 rounded-xl m-4 p-20">
//             <h1 className="text-slate-500 text-xl font-bold mx-3 mb-2">Pending</h1>
//             <TaskForm addTask={this.addTask} />
//             <TaskList tasks={this.state.tasks} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default TaskApp;

const TaskApp = () => {
  const [taskAppState, setTaskAppState] = React.useState<TaskAppState>({
    tasks: [],
  });
  const addTask = (task: TaskItem) => {
    setTaskAppState({
      tasks: [...taskAppState.tasks, task],
    });
  };
  useEffect(() => {
    console.log("Calling The User API");
    document.title = `You have ${taskAppState.tasks.length} items`;
  }, [taskAppState.tasks]); //[] Call Bcz it use for it will only call when the components is mounted
  useEffect(() => {
    // subscribe or connect to services here
    // ...
    return () => {
      // do any clean up code here.
      // unsubscribe / disconnect services
    };
  });
  return (
    <div className="container max-w-7xl mx-3 ">
      <h1 className="text-3xl mb-2 font-bold text-slate-700 ml-14">Smarter Tasks</h1>
      <h1 className="text-lg mb-6 text-slate-600">
        <span className="font-bold ml-14">Project</span>
      </h1>
      <div className="grid grid-cols items-center justify-center gap-3 ml-14">
        <div className="border border-slate-200 bg-gray-300 rounded-xl m-4 p-20">
          <h1 className="text-slate-500 text-xl font-bold mx-3 mb-2">Pending</h1>
          <TaskForm addTask={addTask} />
          <TaskList tasks={taskAppState.tasks} />
        </div>
      </div>
    </div>
  );
};
export default TaskApp;
