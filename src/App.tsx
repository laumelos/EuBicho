import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home";
import Question from "./question";
import Result from "./result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/question",
    element: <Question />,
  },
  {
    path: "/result",
    element: <Result />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
