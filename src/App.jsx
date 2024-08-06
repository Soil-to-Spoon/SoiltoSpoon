import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Signup from './signup/SignUp';
import Login from './login/Login';
import AOS from 'aos';
import "aos/dist/aos.css";


function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic",
    });
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/services',
      element: <Services />,
    },

    {
      path: '/blog',
      element: <Blog />,
    },
    {
      path: '/contact',
      element: <Contact />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;

}

export default App;