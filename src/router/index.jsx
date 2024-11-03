import Base from '../layouts/base'
import Login from '../layouts/login';

import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Base />,
  },
  {
    path: "/login",
    name: 'login',
    element: <Login />,
  }


]);

export default router;