import "./App.css";
import "./TaskApp";
import TaskApp from "./TaskApp";
import HomePage from "./Pages/HomePage";
import TaskListPage from "./Pages/TaskListPage";
import Layout from "./Layout";
import TaskDetails from "./Pages/TaskDetailsPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "tasks",
        element: <TaskListPage />,
      },
      {
        path: "/tasks/:id",
        element: <TaskDetails />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
