// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Oranges from '../assets/images/oranges1.png';
import RedTomato from '../assets/images/RedTomato.png';
import CoconutTable from '../assets/images/coconut-table.png';
import { motion } from "framer-motion";
import {FadeRight} from '../utility/animation';



const images = [Oranges, CoconutTable, RedTomato];

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] items-center">
                {/* Text Content */}
                <div className="flex flex-col justify-center py-14 px-32 md:py-0 relative z-10">
                    <div className="text-center md:text-left space-y-4 lg:max-w-[400px] mx-auto md:mx-0">
                        <motion.h1
                            variants={FadeRight(0.6)}
                            initial="hidden"
                            animate="visible"
                            className="text-5xl lg:text-6xl font-bold text-primary leading-relaxed xl:leading-loose "
                        >
                            Soil to Spoon
                        </motion.h1>
                        <motion.p
                            variants={FadeRight(0.9)}
                            initial="hidden"
                            animate="visible"
                            className="text-2xl lg:text-3xl font-bold text-secondary tracking-wide"
                        >
                            Order Now for Farm Fresh Produce
                        </motion.p>
                        <motion.p
                            variants={FadeRight(1.2)}
                            initial="hidden"
                            animate="visible"
                            className="text-[#141B25]"
                        >
                            We are dedicated to connecting farmers directly with consumers, ensuring fresh and high-quality produce reaches your table without the middlemen. We empower local farmers by giving them a platform to sell their products directly to buyers, resulting in fair prices and sustainable agriculture practices.
                        </motion.p>
                        <motion.div
                            variants={FadeRight(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="flex justify-center md:justify-start"
                        >
                            <Link to="/shop">
                            <button
                                className="bg-primary text-white font-semibold py-3 px-6 rounded-xl shadow-[0px_10px_14px_-7px_#16a34a] hover:!scale-110 duration-300 flex items-center gap-2"
                            >
                                Shop Now
                            </button>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="flex justify-center md:justify-end items-center mt-10 md:mt-0">
                    <motion.img
                        key={currentImageIndex}
                        initial={{ opacity: 0, rotate: 0 }}
                        animate={{ opacity: 1, rotate: 360 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        src={images[currentImageIndex]}
                        alt="Rotating product"
                        className="w-[350px] md:w-[550px] rounded-lg drop-shadow"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;