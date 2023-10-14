import App from "../App";
import Characters from "../components/Characters";
import Home from "../components/Home";
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/home/characters",
      element: <Characters />,
    },
  ]);

  export default router

