import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import About from "./components/About/About.tsx";
import Portfolio from "./components/Portfolio/Portfolio.tsx";
import { IsSideBarOpen } from "./utils/contexts";
import Home from "./components/Home/Home.tsx";

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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <IsSideBarOpen.Provider
    value={{ isSidebarOpen: false, setIsSidebarOpen: () => {} }}
  >
    {" "}
    {/* initial value to avoid mistakes */}
    <RouterProvider router={router} />
  </IsSideBarOpen.Provider>
);
