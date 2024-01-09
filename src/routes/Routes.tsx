import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Homepage, SignUp, Login, Dashboard } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Homepage /> },
      { path: "Signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);
