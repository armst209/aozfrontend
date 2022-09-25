import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import RootLayout from "../components/common/GlobalLayout";
const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
];

export default routes;
