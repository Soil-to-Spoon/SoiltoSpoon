import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './home/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Signup from './signup/SignUp';
import Login from './login/Login';
import AOS from 'aos';
import "aos/dist/aos.css";
import Cart from './pages/Cart';
import RootLayout from './layouts/RootLayout';


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
      element: <RootLayout />, 
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'shop',
          element: <Shop />,
        },
        {
          path: 'blog',
          element: <Blog />,
        },
        {
          path: 'contact',
          element: <Contact />,
        },
       
        {
          path: 'cart',
          element: <Cart />,
        },
      ],
    }, 
    {
          path: 'signup',
          element: <Signup />,
        },
        {
          path: 'login',
          element: <Login />,
        },
  ]);

  return <RouterProvider router={router} />;
}

export default App;