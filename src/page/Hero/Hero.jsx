import React, { useState } from 'react';
import image1 from '../../assets/Rectangle 3.jpg';
import image2 from '../../assets/Rectangle 4.jpg';
import image3 from '../../assets/Rectangle 5.jpg';
import logo from '../../assets/Vector.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: image1, heading: "Hey there, welcome", contact: "Come In" },
    { src: image2, heading: "Heading 2", contact: "Contact Info 2" },
    { src: image3, heading: "Heading 3", contact: "Contact Info 3" },
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 text-white p-4 mt-9">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto px-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="font-bold text-lg">       GMK Dakonderhoud</span>
          </div>

          {/* Navbar Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-gray-400">Home</a>
            <a href="#content" className="hover:text-gray-400">Content</a>
            <a href="#about" className="hover:text-gray-400">About</a>
          </div>

          {/* Spoed Section */}
          <div className="hidden md:flex items-center space-x-4 text-sm">
            <span>Spoed? Bel 020 1234567 of klik hier</span>
            <a href="/chat" className="text-blue-400"></a>
          </div>
          
          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            <button className="text-white" aria-label="Open menu">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Full Background Image */}
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-full">
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center text-white">
                <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">{image.heading}</h2>
                <p className="text-lg md:text-xl mb-6">{image.contact}</p>
                {/* Contact Now Button */}
                <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-500 transition duration-300 ease-in-out">
                  Contact Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-6 transform -translate-y-1/2 text-white bg-black p-3 rounded-full shadow-lg hover:bg-opacity-75 transition duration-300"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 text-white bg-black p-3 rounded-full shadow-lg hover:bg-opacity-75 transition duration-300"
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default Hero;
