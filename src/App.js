import { Sidebar } from "./components/sidebar/Sidebar";
import { Topbar } from "./components/topbar/Topbar";
import "./App.css";
import { Home } from "./pages/home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import { UserList } from "./pages/userList/UserList";
import { User } from "./pages/user/User";
import { NewUser } from "./pages/newUser/NewUser";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/users",
      element: <UserList />,
    },
    {
      path: "/user",
      element: <User />,
    },
    {
      path: "/newUser",
      element: <NewUser />,
    },
  ]);

  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar />
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
