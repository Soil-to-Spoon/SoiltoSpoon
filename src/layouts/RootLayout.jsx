import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const RootLayout = () => {
  return <>
    <Navbar />
  
    <div>
      <Outlet />
    </div>
    <Footer />

  </>;
}

export default RootLayout