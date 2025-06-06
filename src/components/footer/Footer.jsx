import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const [showSocial, setShowSocial] = useState(false);

  const listNavbar = [
    { name: 'Home', link: '#' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Projects', link: '#projects' },
  ];

  const socialLinks = [
    { name: 'GitHub', link: 'https://github.com/Fishxo/', icon: <FaGithub /> },
    { name: 'LinkedIn', link: 'https://linkedin.com/in/fisiha-adamu-76b80283/', icon: <FaLinkedin /> },
    { name: 'Twitter', link: 'https://twitter.com/FishLab162590', icon: <FaTwitter /> },
  ];

  return (
    <footer className="bg-gray-700 rounded-lg shadow">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-ms text-gray-200 sm:text-center">
          2025 <a href="#" className="hover:underline">portfolio.</a>
        </span>

        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-200 sm:mt-0">
          {listNavbar.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="hover:text-orange-400 me-4 md:me-6"
            >
              {item.name}
            </a>
          ))}

          <button
            onClick={() => setShowSocial(!showSocial)}
            className="ml-4 px-3 py-1 text-white bg-orange-500 rounded hover:bg-orange-600 focus:outline-none"
          >
            {showSocial ? 'Hide Social' : 'Show Social'}
          </button>
        </ul>
      </div>

      {showSocial && (
        <div className="flex justify-center space-x-6 p-4 bg-gray-600 rounded-b-lg text-2xl text-white">
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              title={social.name}
              className="hover:text-orange-400"
            >
              {social.icon}
            </a>
          ))}
        </div>
      )}
    </footer>
  );
}
