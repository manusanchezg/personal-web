import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./components/About/About.tsx";
import Portfolio from "./components/Portfolio/Portfolio.tsx";
import Home from "./components/Home/Home.tsx";
import { Contact } from "./components/Contact/Contact.tsx";
import { Donate } from "./components/Donate/Donate.tsx";
import ComingSoonPage from "./components/Helpers/ComingSoon.tsx";
import NotFoundPage from "./components/Helpers/Error.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "portfolio",
        element: <Portfolio />,
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "donate",
        element: <Donate />
      },
      {
        path: "products",
        element: <ComingSoonPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
