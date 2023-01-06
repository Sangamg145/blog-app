import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DashboardLayout from "./Components/DashboardLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Post from "./Pages/Post";
import Register from "./Pages/Register";
import Write from "./Pages/Write";
import { useEffect } from "react";
import auth from "./store/action/auth";
import { useDispatch } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    errorElement: <div>Error 404 not found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Post />,
      },
      {
        path: "/create-post",
        element: <Write />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(auth.getUser());
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
