import logo from "../assets/logo/logo2.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-12">

        
        <div>
          <img 
            src={logo} 
            alt="Africa Tech Academy Logo" 
            className="h-12 md:h-20 w-auto object-contain mb-3"
          />

          <p className="text-sm leading-relaxed">
            Empowering Africa through practical, future-focused digital skills training that combines 
            local and global qualifications to equip IT professionals for the 4IR
          </p>
        </div>

       
        <div>
          <h3 className="text-white font-medium mb-3">Contact</h3>

          <div className="space-y-3 text-sm">

            <div className="flex items-center gap-2">
              <MdEmail className="text-white-400 text-lg" />
              <span>info@africatechacademy.co.za</span>
            </div>

            <div className="flex items-center gap-2">
              <MdPhone className="text-white-400 text-lg" />
              <span>+27 (0) 41 020 0024</span>
            </div>

            <div className="flex items-center gap-2">
              <MdLocationOn className="text-white-400 text-lg" />
              <span>No. 176 Govan Mbeki Avenue Gqeberha, Central 6001</span>
            </div>

          </div> 

         
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-white-400 text-xl hover:text-[#FFA500] transition">
              <FaFacebook />
            </a>

            <a href="#" className="text-white-400 text-xl hover:text-[#FFA500] transition">
              <FaLinkedin />
            </a>

            <a href="#" className="text-white-400 text-xl hover:text-[#FFA500] transition">
              <FaInstagram />
            </a>

            <a href="#" className="text-white-400 text-xl hover:text-[#FFA500] transition">
              <FaXTwitter />
            </a>
          </div>
        </div>

       
        <div>
          <h3 className="text-white font-medium mb-3">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-white-400 hover:text-[#0d542b] transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="text-white-400 hover:text-[#0d542b] transition">
                About Us
              </a>
            </li>

            <li>
              <a href="#services" className="text-white-400 hover:text-[#0d542b] transition">
                Services
              </a>
            </li>

            <li>
              <a href="#contact" className="text-white-400 hover:text-[#0d542b] transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

      </div>

    
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Africa Tech Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}