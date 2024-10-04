import React, { useState } from 'react';
import { ICONS } from '../utilis/icons';  // Adjust the import path as necessary

const testimonials = [
  "Folarite has transformed the way we manage our energy solutions. Highly recommend!",
  "Their CCTV solutions have given us peace of mind. Excellent service!",
  "The team at Folarite provided exceptional support with our electrification project.",
  "I couldn't be happier with the mineral consultancy services. Truly professional!"
];

const TestimonialsCarousel = () => {
  // State to keep track of the current testimonial index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle previous testimonial
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  // Function to handle next testimonial
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative mt-4">
      {/* Carousel Controls */}
      <div className="absolute transform -translate-y-1/2 top-1/2 left-4">
        <button
          onClick={handlePrev}
          className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
        >
          {ICONS.leftArrow}
        </button>
      </div>
      <div className="absolute transform -translate-y-1/2 top-1/2 right-4">
        <button
          onClick={handleNext}
          className="p-2 text-white bg-blue-600 rounded-full hover:bg-blue-700"
        >
          {ICONS.rightArrow}
        </button>
      </div>

      {/* Carousel Testimonials */}
      <div className="flex justify-center">
        <blockquote className="pl-4 italic border-l-4 border-blue-600">
          {testimonials[currentIndex]}
        </blockquote>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
