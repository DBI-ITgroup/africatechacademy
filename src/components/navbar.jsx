import { useState } from "react";
import logo from "../assets/logo/ata-logo.jpeg";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

function Navbar() {
  const [active, setActive] = useState("#home");
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = (link) =>
    `cursor-pointer transition ${
      active === link ? "text-[#3b8132]" : "text-gray-700"
    } hover:text-[#3b8132]`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <img
          src={logo}
          alt="Africa Tech Academy"
          className="h-20 md:h-24 w-auto object-contain"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <div className="flex gap-4">
            <a
              href="#home"
              onClick={() => setActive("#home")}
              className={linkClasses("#home")}
            >
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

          {/* Social Icons */}
          <div className="flex items-center gap-3 ml-2 border-l pl-4 border-gray-200">
            <a
              href="#"
              className="text-gray-500 hover:text-[#FFA500] transition text-lg"
            >
              <FaFacebook />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-[#FFA500] transition text-lg"
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-[#FFA500] transition text-lg"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-[#FFA500] transition text-lg"
            >
              <FaXTwitter />
            </a>
          </div>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-700"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 bg-white shadow-md">
          <a
            href="#home"
            onClick={() => {
              setActive("#home");
              setMenuOpen(false);
            }}
            className={linkClasses("#home")}
          >
            HOME
          </a>

          <a
            href="#about"
            onClick={() => {
              setActive("#about");
              setMenuOpen(false);
            }}
            className={linkClasses("#about")}
          >
            ABOUT
          </a>

          <a
            href="#services"
            onClick={() => {
              setActive("#services");
              setMenuOpen(false);
            }}
            className={linkClasses("#services")}
          >
            SERVICES
          </a>

          <a
            href="#contact"
            onClick={() => {
              setActive("#contact");
              setMenuOpen(false);
            }}
            className={linkClasses("#contact")}
          >
            CONTACT
          </a>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            <FaFacebook className="text-xl text-gray-500 hover:text-[#FFA500]" />
            <FaLinkedin className="text-xl text-gray-500 hover:text-[#FFA500]" />
            <FaInstagram className="text-xl text-gray-500 hover:text-[#FFA500]" />
            <FaXTwitter className="text-xl text-gray-500 hover:text-[#FFA500]" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;