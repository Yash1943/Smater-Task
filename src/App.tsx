import "./App.css";
import "./TaskApp";
import HomePage from "./Pages/HomePage";
import TaskListPage from "./Pages/TaskListPage";
import Layout from "./Layout";
import TaskDetails from "./Pages/TaskDetailsPage";
import Signin from "./Pages/Signin";
import ProtectedRoute from "./ProtectedRoute";

import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/signin" replace />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
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
