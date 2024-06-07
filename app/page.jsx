"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link component from next/link
import logo from "@/assets/icons/logo_green.png";
import Sidebar from "@/components/Sidebar"; // Adjust the path if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import lottie from "lottie-web";
import AnimatedText from "@/hooks/AnimatedText";
import AnimatedColors from "@/hooks/AnimatedColors";
import "@/assets/styles/chat.css";
import send from "@/assets/icons/send_icon.png";
import mic from "@/assets/icons/mic_icon.png";
import gallery from "@/assets/icons/gallery_icon.png";

const HomePage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Show sidebar by default

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const container = useRef(null);

  // Use useEffect hook to load animation after component mounts
  useEffect(() => {
    if (container.current.children.length == 0) {
      // Check if container exists before loading
      lottie.loadAnimation({
        container: container.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: require("@/assets/animations/hello1.json"),
      });
    }
  }, []); // Empty dependency array: run effect only once after mount

  return (
    <>
      <header className="flex justify-content: flex-start items-center py-4 px-6 bg-[#131314] text-black relative">
        {" "}
        {/* Added relative for positioning */}
        <button onClick={toggleSidebar} className="focus:outline-none"></button>
        <Link href="/about">
          <span className="unique-logo-class">
            {" "}
            {/* Add unique class for specificity */}
            <Image
              src={logo}
              alt="Company Logo"
              className={`h-12  w-40 transition-all duration-500 ease-in-out ${
                isSidebarOpen ? "ml-80" : "ml-24"
              }`}
            />
          </span>
        </Link>
        {/* Added Account Icon Element */}
        <Link
          href="/profile"
          className="absolute top-0 right-0 flex items-center mr-4 mt-4"
        >
          {" "}
          {/* Added absolute positioning */}
          <FontAwesomeIcon
            icon={faUser}
            className="account-icon teal-icon"
          />{" "}
          {/* Using Font Awesome */}
        </Link>
      </header>

      <main className="flex min-h-screen bg-[#131314]">
        {/* Set minimum height for full-screen background */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div
          className={`flex-grow bg-[#131314]   transition-all duration-500 ease-in-out ${
            isSidebarOpen ? "ml-80" : "ml-24"
          }`} // Dynamically adjust margin-left
        >
          <div className="flex justify-center overflow-hidden">
            <div
              className="w-64 !py-4 overflow-hidden mb-0"
              ref={container}
            ></div>
          </div>

          <div className=" ml-16 ">
            {/* Ensure parent of this div has display: flex */}
            <div className="content flex-grow">
              {" "}
              <div className="text-left">
                <AnimatedColors
                  text="VIVEK AGGARWAL"
                  className=" text-5xl text-white  mb-4"
                />
                <AnimatedText
                  text="Welcome to Health AI"
                  className=" text-3xl text-white"
                />
              </div>
              <div className="flex items-center justify-center ">
                <div className="main-bottom">
                  <div className="search-box">
                    <input
                      // onChange={(e) => {
                      // 	setInput(e.target.value);
                      // }}
                      // value={input}
                      type="text"
                      placeholder="Enter the Prompt Here"
                    />
                    <div>
                      <Image src={gallery} alt="" />
                      <Image src={mic} alt="" />
                      <Image
                        src={send}
                        alt=""
                        onClick={() => {
                          onSent();
                        }}
                      />
                    </div>
                  </div>
                  <div className="bottom-info">
                    <p>
                      While our app may predict diagnosis, but it is always
                      recommended to consult a doctor for accurate diagnosis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
