import App from '../App'
import Login from '../layouts/login';

import {    createBrowserRouter  } from "react-router-dom";
  
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
      path:"/login",
      element: <Login/>,
    }


  ]);

  export default router;