// import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import ErrorPage from "./Components/Error";
import RootLayout from "./Components/Root";
import Login from "./Components/Login";

const appRouter = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <RootLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
