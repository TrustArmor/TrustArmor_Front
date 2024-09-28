import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageCarousel = () => {
  // Array of images
  const images = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg", // Add as many images as you want
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Navigate to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1 // Decrement for right-to-left
    );
  };

  // Navigate to the previous image
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1 // Increment for right-to-left
    );
  };

  // Auto navigate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Calculate the indices for the side images
  const nextIndex = (currentIndex + 1) % images.length; // Next image
  const prevIndex = (currentIndex - 1 + images.length) % images.length; // Previous image

  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Previous image */}
      <img
        src={images[prevIndex]}
        alt="Previous"
        className="h-64 w-48 object-cover rounded-lg opacity-70" // Increased size
      />

      {/* Chevron left */}
      <FaChevronLeft
        onClick={prevSlide}
        className="cursor-pointer text-5xl text-black" // Increased size
      />

      {/* Current (main) image */}
      <img
        src={images[currentIndex]}
        alt="Main"
        className="h-72 w-56 object-cover rounded-lg" // Increased size
      />

      {/* Chevron right */}
      <FaChevronRight
        onClick={nextSlide}
        className="cursor-pointer text-5xl text-black" // Increased size
      />

      {/* Next image */}
      <img
        src={images[nextIndex]}
        alt="Next"
        className="h-64 w-48 object-cover rounded-lg opacity-70" // Increased size
      />
    </div>
  );
};

export default ImageCarousel;
