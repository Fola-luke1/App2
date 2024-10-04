import React from 'react';

import TestimonialsCarousel from './TestimonialsCarousel';
const Home = () => {
  return (
    <div className='mt-10'>
      <div className="p-4">
        <h2 className="text-2xl font-bold">Welcome to Folarite!</h2>
        <p className="mt-2 text-gray-700">
          Explore our features and see how we can assist you with our services, including Solar Expertise, CCTV solutions, Mineral Consultancy, and Electrification.
        </p>

        {/* Sample Feature Cards */}
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1: Solar Expert */}
          <div className="p-4 border rounded-lg shadow-md">
            <img src="path_to_image_1.jpg" alt="Solar Expert" className="object-cover w-full h-48 rounded-lg" />
            <h3 className="mt-2 text-lg font-semibold">Solar Expert</h3>
            <p className="text-gray-600">
              Our team specializes in solar energy solutions, helping you harness the power of the sun for sustainable energy.
            </p>
          </div>

          {/* Card 2: CCTV */}
          <div className="p-4 border rounded-lg shadow-md">
            <img src="path_to_image_2.jpg" alt="CCTV" className="object-cover w-full h-48 rounded-lg" />
            <h3 className="mt-2 text-lg font-semibold">CCTV Solutions</h3>
            <p className="text-gray-600">
              We provide state-of-the-art CCTV systems to ensure your security and peace of mind, whether at home or in the workplace.
            </p>
          </div>

          {/* Card 3: Mineral Consultant */}
          <div className="p-4 border rounded-lg shadow-md">
            <img src="path_to_image_3.jpg" alt="Mineral Consultant" className="object-cover w-full h-48 rounded-lg" />
            <h3 className="mt-2 text-lg font-semibold">Mineral Consultant</h3>
            <p className="text-gray-600">
              Our mineral consultancy services offer expert advice and analysis to help you make informed decisions in the industry.
            </p>
          </div>

          {/* Card 4: Electrification Expert */}
          <div className="p-4 border rounded-lg shadow-md">
            <img src="path_to_image_4.jpg" alt="Electrification Expert" className="object-cover w-full h-48 rounded-lg" />
            <h3 className="mt-2 text-lg font-semibold">Electrification Expert</h3>
            <p className="text-gray-600">
              We specialize in electrification projects, providing innovative solutions for energy efficiency and sustainability.
            </p>
          </div>

          {/* Card 5: Additional Service */}
          <div className="p-4 border rounded-lg shadow-md">
            <img src="path_to_image_5.jpg" alt="Service 5" className="object-cover w-full h-48 rounded-lg" />
            <h3 className="mt-2 text-lg font-semibold">Service 5</h3>
            <p className="text-gray-600">
              A brief description of another service goes here, explaining how it can help you.
            </p>
          </div>

          {/* Card 6: Additional Service */}
          <div className="p-4 border rounded-lg shadow-md">
            <img src="path_to_image_6.jpg" alt="Service 6" className="object-cover w-full h-48 rounded-lg" />
            <h3 className="mt-2 text-lg font-semibold">Service 6</h3>
            <p className="text-gray-600">
              A brief description of another service goes here, explaining how it can benefit you.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold">What Our Clients Say</h2>
          <TestimonialsCarousel />
        </div>

        <div className="flex flex-wrap justify-between mt-8 mb-4 space-x-4">
          {/* Services Overview */}
          <div className="flex-1 p-4 border rounded-lg shadow-md"> 
            <h2 className="text-lg font-bold">Our Services</h2>
            <p className="mt-2">We offer a range of services tailored to meet your needs.</p>
          </div>

          {/* Blog or Resources Section */}
          <div className="flex-1 p-4 border rounded-lg shadow-md"> 
            <h2 className="text-lg font-bold">Resources</h2>
            <p className="mt-2">Check out our latest articles and resources.</p>
          </div>

          {/* Call to Action Section */}
          <div className="flex-1 p-4 border rounded-lg shadow-md"> 
            <h2 className="text-lg font-bold">Ready to Get Started?</h2>
            <button className="px-4 py-2 mt-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Contact Us
            </button>
          </div>

          {/* FAQ Section */}
          <div className="flex-1 p-4 border rounded-lg shadow-md"> 
            <h2 className="text-lg font-bold">Frequently Asked Questions</h2>
            <p className="mt-2">Find answers to common queries.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
