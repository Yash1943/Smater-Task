import React from "react";

interface TaskFormProps {}
interface TaskFormState {
  title: string;
  dueDate: string;
  description: string;
}
class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
  constructor(props: TaskFormProps) {
    super(props);
    this.state = {
      title: "",
      dueDate: "",
      description: "",
    };
  }
  addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const newTask = {
      title: this.state.title,
      dueDate: this.state.dueDate,
      description: this.state.description,
    };
    this.props.addTask(newTask);
    this.setState({ title: "", dueDate: "", description: "" });
  };
  titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ title: event.target.value });
  };
  dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ dueDate: event.target.value });
  };
  descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log(`${event.target.value}`);
    this.setState({ description: event.target.value });
  };
  render() {
    return (
      <form onSubmit={this.addTask} className="flex flex-col">
        <label htmlFor="text">Enter the title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={this.titleChanged}
          className="border border-x-3 m-2 text-center"
        />
        <label htmlFor="dueDate">Enter the dueDate</label>
        <input
          type="Date"
          value={this.state.dueDate}
          onChange={this.dueDateChanged}
          className="border border-x-3 m-2 text-center"
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={this.state.description}
          onChange={this.descriptionChanged}
          className="border border-x-3 m-4 text-center"
        />
        <button type="submit" className="bg-green-400 m-2 p-1 rounded">
          Add item
        </button>
      </form>
    );
  }
}
export default TaskForm;

//   inputRef = React.createRef<HTMLInputElement>();
// ${this.inputRef.current?.value}`

//   ref={this.inputRef}
