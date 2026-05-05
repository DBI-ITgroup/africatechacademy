import { useState } from "react";
import logo from "../assets/logo/ata-logo.jpeg";
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";

function Navbar() {
  const [active, setActive] = useState("#home");

  const linkClasses = (link) =>
    `cursor-pointer transition ${
      active === link ? "text-[#3b8132]" : "text-gray-700"
    } hover:text-[#3b8132]`;

  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md fixed w-full bg-white z-50">

   
      <img
        src={logo}
        alt="Africa Tech Academy"
        className="h-20 md:h-24 w-auto object-contain"
      />

     
      <div className="hidden md:flex items-center gap-6 text-sm font-medium">

       
        <div className="flex gap-4">
          <a href="#home" >
            HOME
          </a>

          <a
            href="#about"
            onClick={() => setActive("#about")}
            className={linkClasses("#about")}
          >
            ABOUT
          </a>

          <a
            href="#services"
            onClick={() => setActive("#services")}
            className={linkClasses("#services")}
          >
            SERVICES
          </a>

          <a
            href="#contact"
            onClick={() => setActive("#contact")}
            className={linkClasses("#contact")}
          >
            CONTACT
          </a>
        </div>

      
        <div className="flex items-center gap-3 ml-2 border-l pl-4 border-gray-200">
          <a href="#" className="text-gray-500 hover:text-[#FFA500] transition text-lg">
            <FaFacebook />
          </a>

          <a href="#" className="text-gray-500 hover:text-[#FFA500] transition text-lg">
            <FaLinkedin />
          </a>

          <a href="#" className="text-gray-500 hover:text-[#FFA500] transition text-lg">
            <FaInstagram />
          </a>

          <a href="#" className="text-gray-500 hover:text-[#FFA500] transition text-lg">
            <FaXTwitter />
          </a>
        </div>

      </div>

      
      <button className="md:hidden text-2xl text-gray-700">
        ☰
      </button>
    </nav>
  );
}

export default Navbar;