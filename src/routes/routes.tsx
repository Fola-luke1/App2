
import {  createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
import Dashboard from '../components/Dashboard';
import Profile from '../components/Profile';
import Contact from '../components/Contact';
import Layout from '../Layout';
import ErrorPage from '../pages/Error/Error';
import Signup from '../components/Signup';
import Login from '../components/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          { path: "profile", element: <Profile /> },
          { path: "contact", element: <Contact /> },
        ],
      },
      {
				path: "/register",
				element: <Signup />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/login",
				element: <Login/>,
				errorElement: <ErrorPage />,
			},
    ],
  },
]);

export default router;
