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
import Manager from './Pages/DashboardMain/Manager/Manager';
import Studernts from './Pages/DashboardMain/Studernts/Studernts';
import AllUser from './Pages/DashboardMain/AllUser/AllUser';
import PrivateRoute from './PrivateRouter/PrivateRoute';
import ClassAdd from './Pages/DashboardMain/ClassAdd/ClassAdd';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import AllStudent from './Pages/DashboardMain/AllStudent/AllStudent';
import Icon from './Pages/DashboardMain/Studernts/Icon/Icon';
import MySeleted from './Pages/DashboardMain/MySeleted/MySeleted';
import Ply from './Pages/DashboardMain/Ply/Ply';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Login",
        element: <Login></Login>
      },
      {
        path: "/Regetetion",
        element: <Regetetion></Regetetion>
      },
      {
        path: "/Class",
        element: <Class></Class>
      },
      {
        path: "/Instructors",
        element: <Instructors></Instructors>
      }
    ]
  },
  {
    path: "/Dashboard",
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/Dashboard/Instructors",
        element: <Instructors></Instructors>
      },
      {
        path: "/Dashboard/Manager",
        element: <Manager></Manager>
      },
      {
        path: "/Dashboard/Studernts",
        element: <Studernts></Studernts>
      },
      {
        path: "/Dashboard/AllUser",
        element: <AllUser></AllUser>
      },
      {
        path: "/Dashboard/ClassAdd",
        element: <ClassAdd></ClassAdd>
      },
      {
        path: "/Dashboard/AllStudent",
        element: <AllStudent></AllStudent>
      },
      {
        path:'/Dashboard/',
        element:<Icon></Icon>
      },
      {
        path:'/Dashboard/MySeleted',
        element:<MySeleted></MySeleted>
      },
      {
        path:'/Dashboard/Ply',
        element:<Ply></Ply>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <AuthProviders>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProviders>
  </React.StrictMode>,
)
