import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Hero from '../home/Hero';

const RootLayout = () => {
  return <>
    <Navbar />
    <Hero />
    <div>
      <Outlet />
    </div>
    <Footer />

  </>;
}

export default RootLayout