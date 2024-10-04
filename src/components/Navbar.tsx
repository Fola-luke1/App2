import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ICONS } from '../utilis/icons'; // Adjust path accordingly

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full p-4 bg-gray-800">
      <div className="flex items-center justify-between">
        {/* Brand name */}
        <h1 className="text-lg font-bold text-white cursor-pointer">Folarite</h1>

        {/* Hamburger button (visible on small and medium screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? ICONS.close : ICONS.menu}
          </button>
        </div>

        {/* Menu items (visible on large screens) */}
        <ul className="hidden space-x-4 text-white md:flex">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          </li>
          <li className="flex items-center">
            {ICONS.login}
            <Link to="/login" className="ml-2 hover:text-gray-300">Login</Link>
          </li>
          <li className="flex items-center">
            {ICONS.signup}
            <Link to="/signup" className="ml-2 hover:text-gray-300">Sign Up</Link>
          </li>
        </ul>
      </div>

      {/* Menu for small and medium screens */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4`}>
        <ul className="flex flex-col space-y-2 text-white cursor-pointer">
          <li>
            <Link to="/" className="hover:text-gray-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300">About</Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          </li>
          <li className="flex items-center">
            {ICONS.login}
            <Link to="/login" className="ml-2 hover:text-gray-300">Login</Link>
          </li>
          <li className="flex items-center">
            {ICONS.signup}
            <Link to="/signup" className="ml-2 hover:text-gray-300">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
