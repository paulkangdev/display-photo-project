import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import AboutPage from "./pages/AboutPage/AboutPage.tsx";
import PhotoPage from "./pages/PhotoPage/PhotoPage.tsx";

const router = createBrowserRouter(
  [
    {
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <PhotoPage title="Sweet Lean Techniques App"/>,
          index: true,
        },
        {
          path: "about",
          element: <AboutPage title="About Paul" />,
        },
      ],
    },
  ],
  { basename: "/display-photo-project/" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
