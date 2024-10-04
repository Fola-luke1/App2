import React, { useState } from "react";
import { ICONS } from '../utilis/icons'; 
import forest from "../assets/images/forest-7580700_1280.jpg";
import pumpkins from "../assets/images/pumpkins-8338100_1280.jpg";
import sea from "../assets/images/sea-7914544_1280.jpg";

const Contact = () => {
  const images = [forest, pumpkins, sea];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-200 flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to the our world</h1>
          <p className="text-xl">we care always.</p>
          <p className="text-lg mt-2">meet them as needed!</p>
        </div>
      </div>

      <div className="w-1/2 bg-white flex flex-col justify-center items-center relative h-full">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={images[currentImageIndex]}
            alt="Carousel"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex justify-between w-full absolute bottom-20 px-4">
          
          <div onClick={prevImage} className="cursor-pointer text-4xl text-gray-300 hover:text-gray-900">
            {ICONS.leftArrow}
          </div>
          
          <div onClick={nextImage} className="cursor-pointer text-4xl text-gray-300 hover:text-gray-900">
            {ICONS.rightArrow}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
