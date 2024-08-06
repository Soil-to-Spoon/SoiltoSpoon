// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import SoilLogo from '../assets/images/soil-logo.png';
import { ShoppingBasketIcon } from 'lucide-react';

const Navbar = () => {
  return (
    <>
      <div className="pt-4 pb-1 bg-white shadow w-full">
        <div className="container mx-auto px-3 md:px-0">
          <div className="flex flex-wrap items-start md:items-center">
            <div className="w-full md:w-1/3 flex mb-2 md:mb-0">
              <Link className="navbar-brand flex items-center" to="/">
                <img src={SoilLogo} alt="soil to spoon logo" className="w-40" />
              </Link>
            </div>
            <div className="w-full md:w-1/3 flex items-center justify-center mb-2 md:mb-0">
              <div className="icon flex justify-center items-center">
                <span className="fa fa-map"></span>
              </div>
              <div className="pl-3 text-center md:text-left">
                <p className="con">
                  <span className="block font-semibold">Call Us</span>
                  <span className="text-xs">+233 24 123 4567</span>
                </p>
                <p className="con text-xs">Call Us Now 24/7 Customer Support</p>
              </div>
            </div>
            <div className="w-full md:w-1/3 flex items-center justify-center md:justify-end">
              <div className="icon flex justify-center items-center">
                <span className="fa fa-paper-plane"></span>
              </div>
              <div className="pl-3 text-center md:text-left">
                <p className="hr">
                  <span className="block font-semibold">Our Location</span>
                </p>
                <p className="text-xs">
                15 Osu La Crescent, Accra, Ghana
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-green-600 w-full">
        <nav className="container mx-auto flex justify-between items-center p-4 text-white">
          <ul className="flex space-x-8">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <ShoppingBasketIcon className="text-white" />
            </Link>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
