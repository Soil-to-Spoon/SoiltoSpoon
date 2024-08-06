// src/components/Hero.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Plants from '../assets/images/plants.jpg';
import Winery from '../assets/images/winery.jpg';
import Products from '../components/Products';

const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const images = [
        Winery,
        Plants,
    ];

    return (
        <>
            <div className="hero relative w-full">
                <Slider {...settings}>
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img src={image} alt={`Slide ${index}`} className="w-full h-screen object-cover" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center">
                                <h1 data-aos="fade-up" className="text-4xl md:text-6xl font-bold mb-4 ">Welcome to Soil and Spoon</h1>
                                <p data-aos="fade-up" className="text-lg md:text-2xl">Connecting farmers directly to buyers</p>
                                <div className="flex space-x-2 mt-7">
                                    <button className="text-white bg-[#5D8C55] pt-2 py-2 px-3 rounded-lg border-2 border-[#5D8C55]">
                                        Our Services
                                    </button>
                                    <button className="text-[#5D8C55] bg-[#ECDC67] pt-2 py-2 px-3 rounded-lg border-2 border-[#ECDC67]">
                                        Contact Us
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <Products />
        </>
    );
};

export default Hero;
