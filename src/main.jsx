import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import Main from './Layout/Main.jsx';
import Dashboard from './Layout/Dashboard.jsx';
import Error from './Error/Error.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login.jsx';
import Regetetion from './Pages/Regetetion/Regetetion.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Class from './Pages/Class/Class';
import Instructors from './Pages/Instructors/Instructors';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    errorElement:<Error></Error>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/Login",
        element:<Login></Login>
      },
      {
        path:"/Regetetion",
        element:<Regetetion></Regetetion>
      },
      {
        path:"/Class",
        element:<Class></Class>
      },
      {
        path:"/Instructors",
        element:<Instructors></Instructors>
      }
    ]
  },
  {
    path: "/Dashboard",
    element:<Dashboard></Dashboard>,
    errorElement:<Error></Error>,
    // children:[
    //   {
    //     path:"/",
    //     element:<Dashboard></Dashboard>
        
    //   }
    // ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProviders>
     <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
