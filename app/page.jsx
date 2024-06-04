'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link component from next/link
import logo from "@/assets/icons/logo_green.png";
import Sidebar from "@/components/Sidebar"; // Adjust the path if needed
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import lottie from 'lottie-web';

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Show sidebar by default

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const container = useRef(null);

  // Use useEffect hook to load animation after component mounts
  useEffect(() => {
    if (container.current) { // Check if container exists before loading
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        animationData: require('@/assets/animations/hello.json')
      })
    }
  }, []); // Empty dependency array: run effect only once after mount

  return (
    <>
      <header className="flex justify-content: flex-start items-center py-4 px-6 bg-[#131314] text-black relative"> {/* Added relative for positioning */}
        <button onClick={toggleSidebar} className="focus:outline-none"></button>
        <Link href="/about">
          <span className="unique-logo-class"> {/* Add unique class for specificity */}
            <Image
              src={logo}
              alt="Company Logo"
              className={`h-12  w-40 transition-all duration-500 ease-in-out ${
                isSidebarOpen ? 'ml-80' : 'ml-24'
              }`}
            />
          </span>
        </Link>

        {/* Added Account Icon Element */}
        <Link href="/profile" className="absolute top-0 right-0 flex items-center mr-4 mt-4"> {/* Added absolute positioning */}
          <FontAwesomeIcon icon={faUser} className="account-icon teal-icon" /> {/* Using Font Awesome */}
        </Link>
      </header>

      <main className="flex min-h-screen bg-[#131314]">
        {/* Set minimum height for full-screen background */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex-grow bg-[#131314] px-6 py-12  transition-all duration-500 ease-in-out ${isSidebarOpen ? 'ml-80' : 'ml-24'
          }`} // Dynamically adjust margin-left
        >
          <div ref={container}></div>
          
          <div>
            {/* Ensure parent of this div has display: flex */}
            <div className="content flex-grow">  {/* Add class for specificity */}
              <h1 className="text-4xl text-white mb-4">Welcome to Health AI</h1>
              <p className="text-lg text-white mb-4">
                Your AI-powered doctor companion that helps you diagnose your
                symptoms and find the right treatment.
              </p>
              <Link href="/about">
                <span className="text-blue-500 underline">Learn more</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
