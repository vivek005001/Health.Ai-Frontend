// components/HomePageClient.jsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/icons/logo_green.png';
import Sidebar from '@/components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


const HomePageClient = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
      {/* Your JSX elements go here */}
      {/* You can access isSidebarOpen and toggleSidebar as props */}
      <header className="flex justify-content: flex-start items-center py-4 px-6 bg-[#131314] text-black relative">
        <button onClick={toggleSidebar} className="focus:outline-none"></button>
        <Link href="/">
          <span className="unique-logo-class">
            <Image
              src={logo}
              alt="Company Logo"
              className={`h-12 w-40 transition-all duration-500 ease-in-out ${
                isSidebarOpen ? 'ml-80' : 'ml-24'
              }`}
            />
          </span>
        </Link>

        <Link href="/profile" className="absolute top-0 right-0 flex items-center mr-4 mt-4">
          <FontAwesomeIcon icon={faUser} className="account-icon teal-icon" />
        </Link>
      </header>

      <main className="flex min-h-screen bg-[#131314]">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        {/* ... */}
      </main>
    </>
  );
};

export default HomePageClient;