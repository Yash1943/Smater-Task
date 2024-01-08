// import React from "react";
import Task from "./Task";
import { TaskItem } from "./type";

interface Props {
  tasks: TaskItem[];
}
// interface state {}

// class TaskList extends React.Component<Props, state> {
// constructor(props: Props) {
//   super(props);
//   this.state = {
//     tasks: [],
//   };
// }
// componentDidMount(): void {     //
//   this.state = {
//     tasks: [
//       { title: "TaskList" },
//       { title: "Pay rent" },
//       { title: "indian" },
//       { title: "Australia" },
//     ],
//   };
// }

// componentDidMount(): void {
//   const tasks = [
//     { title: "TaskList" },
//     { title: "Pay rent" },
//     { title: "indian" },
//     { title: "Australia" },
//   ];

//   this.setState((state, props) => ({ tasks }));
// }
//   render() {
//     return this.props.tasks.map((task, idx) => (
//       <Task key={idx} title={task.title} dueDate={task.dueDate} description={task.description} />
//     ));
//   }
// }

// export default TaskList;

//       <>

//         {/* {this.state.tasks.map((task, idx) => ( */}
//           <Task key={idx} title={task.title} />
//         ))}
//       </>
//     );
//   }
// }

const TaskList = (props: Props) => {
  const List = props.tasks.map((task, idx) => (
    <Task key={idx} title={task.title} dueDate={task.dueDate} description={task.description} />
  ));
  return <>{List}</>;
};

export default TaskList;
