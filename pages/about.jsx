"use client"; // Add this line at the top

import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-black">
      <h1 className="text-4xl mb-4">About Us</h1>
      <p className="text-lg mb-4">
        Welcome to our company. We are dedicated to providing the best service to our customers.
      </p>
      <Link href="/">
        <span className="text-blue-500 underline">Go back to Home</span>
      </Link>
    </div>
  );
};

export default AboutPage;
