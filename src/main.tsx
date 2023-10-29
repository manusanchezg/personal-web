import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./components/About/About.tsx";
import Portfolio from "./components/Portfolio/Portfolio.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "portfolio",
    element: <Portfolio />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
