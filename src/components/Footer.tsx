import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-4 text-white bg-gray-800">
      <div className="container flex items-center justify-between mx-auto">
        <p className="text-sm">
          © {new Date().getFullYear()} My Application. All rights reserved.
        </p>
        <div>
          <Link to="/privacy" className="mx-2 text-white hover:text-gray-400">Privacy Policy</Link>
          <Link to="/terms" className="mx-2 text-white hover:text-gray-400">Terms of Service</Link>
          <Link to="/contact" className="mx-2 text-white hover:text-gray-400">Contact</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

