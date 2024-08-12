import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
import { MdMenu, MdOutlineShoppingCart } from 'react-icons/md';
import ResponsiveMenu from './ResponsiveMenu';
import {motion} from 'framer-motion';

const NavbarMenu = [
  { id: 1, title: 'Home', link: '/' },
  { id: 2, title: 'About', link: '/about' },
  { id: 3, title: 'Shop', link: '/shop' },
  { id: 4, title: 'Blog', link: '/blog' },
  { id: 5, title: 'Contact', link: '/contact' },
  { id: 6, title: 'Sign Up', link: '/signup' },
  { id: 7, title: 'Login', link: '/login' },
];

const Navbar = () => {
  const [Open, setOpen] = React.useState(false);

  return (
    <>
      <nav>
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.5, delay: 0.5}}
        className="container flex justify-between items-center py-4 md:pt-4">
          <div className="text-2xl flex items-center pl-20 gap-2 font-bold uppercase">
            <p className="text-primary">Soil to</p>
            <p className="text-secondary">Spoon</p>
            <FaLeaf className="text-green-600" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 text-[#141B25]">
              {NavbarMenu.map((menu) => (
                <li key={menu.id}>
                  <Link
                    to={menu.link}
                    className="inline-block py-1 px-3 hover:text-primary hover:shadow-[0_3px_0_-1px_#ecdc67] font-semibold"
                  >
                    {menu.title}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/cart" className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200 flex items-center">
              <MdOutlineShoppingCart />
            </Link>
          </div>
          <div className="md:hidden" onClick={() => setOpen(!Open)}>
            <MdMenu className="text-4xl" />
          </div>
        </motion.div>
      </nav>
      <ResponsiveMenu open={Open} />
    </>
  );
};

export default Navbar;
