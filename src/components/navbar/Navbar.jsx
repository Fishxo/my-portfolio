import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const listNavbar = [
    { name: 'Home', link: '#' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experince', link: '#exeperiance' },
    { name: 'Language', link: '#language' },
    { name: 'Projects', link: '#projects' },
  ];

  return (
    <header className="text-white body-font z-10">
      <div className="container mx-auto flex p-5 flex-wrap items-center justify-between">
        {/* Logo */}
        <span className="text-3xl font-bold text-white">portfolio</span>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex md:ml-auto md:mr-auto">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="mr-5 hover:text-yellow-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center py-1 px-7 border border-white hover:border-yellow-300 hover:text-gray-900"
          >
            contact me
          </a>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-5 pb-4 space-y-2">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block text-white hover:text-yellow-300"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="block mt-2 py-1 px-4 border border-white hover:border-yellow-300 text-white hover:text-gray-900 text-center"
          >
            contact me
          </a>
        </div>
      )}
    </header>
  );
}
