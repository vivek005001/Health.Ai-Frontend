"use client";

import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-[#1E1F20] text-white transition-all duration-500 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-[220px]'
      }`}
      style={{ width: '300px' }}
    >
      <div className="flex justify-end p-4">
        <button
          onClick={toggleSidebar}
          className="focus:outline-none text-white flex flex-col items-center space-y-1 mr-4 mt-2"
        >
          <span
            className={`bg-white h-0.5 w-5 transition-transform  duration-500 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          />
          <span
            className={`bg-white h-0.5 w-5 transition-transform  duration-500 ease-in-out ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`bg-white h-0.5 w-5 transition-transform  duration-500 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </div>
      {isOpen && (
        <nav>
          <ul>
            <li className="p-4">Googel Fit</li>
            
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Sidebar;