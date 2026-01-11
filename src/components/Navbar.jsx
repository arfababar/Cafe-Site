// Navbar.jsx
import React from 'react';
import { FaCoffee } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#FFF7F3] border-b border-[#F3EAE6]">
      <div
        className="
          max-w-5xl
          mx-auto
          flex
          justify-between
          items-center
          py-4
          sm:py-5
          px-4
          sm:px-6
        "
      >
        {/* Logo Icon */}
        <div className="flex items-center">
          <FaCoffee className="text-[#4B4453] text-2xl sm:text-3xl" />
        </div>

        {/* Navigation Links */}
        <ul
          className="
            flex
            gap-4
            sm:gap-6
            md:gap-8
            font-medium
            text-sm
            sm:text-base
            md:text-lg
          "
        >
          {['about', 'menu', 'contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="
                  text-[#4B4453]
                  hover:text-[#2E2A32]
                  transition-colors
                  duration-200
                  whitespace-nowrap
                "
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
