import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra/theme";
import "./main.css";

// router imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routes
import Root from "./routes/Root";
import ProjectPage from "./routes/ProjectPage"; 
// Import the new layout
import ErrorPage from "./routes/ErrorPage";

// pages
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import IDPortfolio from "./pages/id_portfolio/IDPortfolio";

const router = createBrowserRouter([
  {
    // root route
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "id_portfolio",
        element: <IDPortfolio />,
      },
    ],
  },
  {
    // projects route with a different layout
    path: "projects",
    element: <ProjectPage />, // Use the new layout here
    children: [
      {
        path: "",
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
);