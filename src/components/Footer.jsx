import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className="bg-[#141B25] pl-20 pt-12 pb-8 text-white">
      <div className="container"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 gap-8 ">
        <div className="space-y-6">
          <h1 className="text-xl font-bold">Soil and Spoon

          </h1>
          <p className="text-sm max-w-[300px]">
          Soil and Spoon is an innovative platform designed to bridge the gap between farmers and buyers, eliminating the need for middlemen like supermarkets. <br/>This direct connection not only increases farmers' profits but also provides buyers with fresh, high-quality produce. 
          </p>
        </div>

        <div className="space-y-6">
          <h1 className="text-xl font-bold">
            Explore</h1>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <ul className="space-y-2">
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="">Services</a>
                  </li>
                  <li>
                    <a href="">Blog</a>
                  </li>
                </ul>
              </div>
              <div>
             
                <ul className="space-y-2">
                  <li>
                    <a href="">Shipping Info</a>
                  </li>
                  <li>
                    <a href="">Returns & Exchange</a>
                  </li>
                  <li>
                    <a href="">Terms and Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  
                </ul>
              </div>


            </div>
          
        </div>

        <div className="space-y-6">
          <h1 className="text-xl font-bold">Have a Questions?</h1>
          <div>
            <p>+233 24 123 4567</p>
            <p>15 Osu La Crescent, Accra, Ghana </p>
            <p>info@SoilSpoon.com </p>
          </div>
          <div className="flex items-center gap-3">
            <FaFacebook className="text-xl hover:scale-105 duration-300"/>
            <FaInstagram className="text-xl hover:scale-105 duration-300"/>
            <FaTwitter className="text-xl hover:scale-105 duration-300"/>
            <FaLinkedinIn className="text-xl hover:scale-105 duration-300 "/>




          </div>
        </div>


      </div>

    </div>
  )
}

export default Footer