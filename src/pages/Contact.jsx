import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import Winery from '../assets/images/winery.jpg';
import Village from '../assets/images/Village.jpg';

const Contact = () => {
  return (
    <div>
      {/* Banner with overlay */}
      <div className="relative w-full h-64">
        <img
          src={Winery}
          alt="Contact Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Icons Section */}
      <div className="container mx-auto py-8 px-4 md:px-0 pb-32"  >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 ">
          <div className="flex items-center ">
            <MapPin className="text-green-600 w-8 h-8 mr-4" />
            <div>
              <p className="font-bold">Address:</p>
              <p> 15 Osu La Crescent, Accra, Ghana</p>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="text-green-600 w-8 h-8 mr-4" />
            <div>
              <p className="font-bold">Phone:</p>
              <p>+233 24 123 4567</p>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="text-green-600 w-8 h-8 mr-4" />
            <div>
              <p className="font-bold">Email:</p>
              <p>info@SoilSpoon.com</p>
            </div>
          </div>
          <div className="flex items-center">
            <Globe className="text-green-600 w-8 h-8 mr-4" />
            <div>
              <p className="font-bold">Website:</p>
              <p>www.soiltospoon.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                  Full Name
                </label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  id="name"
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full px-3 py-2 border rounded"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-3 py-2 border rounded"
                  id="message"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
              <button
                className="bg-green-600 text-white px-4 py-2 rounded font-bold hover:bg-green-700"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
          <div>
            <img
              src={Village}
              alt="Village"
              className="w-[462.5px] h-full object-cover rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
