import image from "../assets/images/employees3.jpg";
import { FaShieldAlt, FaNetworkWired, FaCode, FaWifi, FaCloud, FaClipboardList,FaCheckCircle, FaLaptop, FaGlobe, FaUsers } from "react-icons/fa";
function Services() {
  return (
   <>
      <section id="services" className="relative overflow-hidden scroll-mt-28 py-20 text-center">
        
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

      <div className="relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl font-bold">WHAT WE OFFER</h2>
            <div className="w-12 h-1 bg-[#FFA500] mx-auto mt-1 rounded-full"></div>
          </div>


          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-6">

          
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#0B2C5F] w-12 h-12 flex items-center justify-center rounded-full">
                  <FaNetworkWired className="text-white text-lg" />
                </div>
                <h3 className="text-left font-semibold text-gray-800">
                  Networking and Infrastructure
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600 text-left">
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> Cisco CCNA & CCNP</li>
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> Networking Essentials</li>
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> IPv6 (AfriNIC Certified)</li>
              </ul>
            </div>

          
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#0B2C5F] w-12 h-12 flex items-center justify-center rounded-full">
                  <FaShieldAlt className="text-white text-lg" />
                </div>
                <h3 className="text-left font-semibold text-gray-800">
                  Cybersecurity
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600 text-left">
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> CyberOps Associate</li>
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> Network Security</li>
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> Ethical Hacking (EC-Council, pending)</li>
              </ul>
            </div>

            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#0B2C5F] w-12 h-12 flex items-center justify-center rounded-full">
                  <FaCode className="text-white text-lg" />
                </div>
                <h3 className="text-left font-semibold text-gray-800">
                  Programming and Automation
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600 text-left">
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> Python Essentials I & II</li>
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> DevNet Associate</li>
              </ul>
            </div>

          
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#0B2C5F] w-12 h-12 flex items-center justify-center rounded-full">
                  <FaWifi className="text-white text-lg" />
                </div>
                <h3 className="text-left font-semibold text-gray-800">
                  Internet of Things (IoT)
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600 text-left">
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> IoT & Digital Transformation</li>
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> Connecting Things</li>
              </ul>
            </div>

          
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#0B2C5F] w-12 h-12 flex items-center justify-center rounded-full">
                  <FaCloud className="text-white text-lg" />
                </div>
                <h3 className="text-left font-semibold text-gray-800">
                  Cloud and Data
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600 text-left">
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> CO-Cloud Administrator</li>
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> Data Analytics Essentials</li>
              </ul>
            </div>

            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-[#0B2C5F] w-12 h-12 flex items-center justify-center rounded-full">
                  <FaClipboardList className="text-white text-lg" />
                </div>
                <h3 className="text-left font-semibold text-gray-800">
                  IT Governance and Auditing
                </h3>
              </div>

              <ul className="space-y-2 text-gray-600 text-left">
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> ISO27001</li>
                <li className="flex gap-2"><span className="text-[#FFA500]">•</span> CISA</li>
              </ul>
            </div>

          </div>
        </div> 
        </section>

      <section className="relative overflow-hidden py-20">

  <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="blob blob-1"></div>
    <div className="blob blob-2"></div>
    <div className="blob blob-3"></div>
  </div>

  <div className="relative z-10 max-w-6xl mx-auto px-6">

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

      {/* IMAGE COLUMN */}
      <div className="md:border-r md:border-[#C9A14A] pr-6">
        <div className="h-full">
          <img
            src={image}
            alt="Students"
            className="rounded-xl w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* WHO WE SERVE */}
      <div className="md:border-r md:border-[#C9A14A] px-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">
          Who We Serve
        </h3>

        <ul className="space-y-3 text-gray-700 text-lg">
          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-orange-500 mt-1 text-lg" />
            High School Graduates
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-orange-500 mt-1 text-lg" />
            TVET and University Students
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-orange-500 mt-1 text-lg" />
            Unemployed ICT Graduates
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-orange-500 mt-1 text-lg" />
            Corporates and Professionals
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-orange-500 mt-1 text-lg" />
            Government and Municipal Staff
          </li>

          <li className="flex items-start gap-3">
            <FaCheckCircle className="text-orange-500 mt-1 text-lg" />
            ICT Trainers and Institutions
          </li>
        </ul>
      </div>

      {/* DELIVERY MODELS */}
      <div className="pl-6">
        <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide">
          Delivery Models
        </h3>

        <div className="space-y-5 text-gray-700 text-lg">

          <div className="flex items-start gap-3">
            <FaLaptop className="text-[#0B2C5F] text-xl mt-1" />
            <p>
              In-person training and bootcamps <br />
              <span className="text-gray-500 text-sm">
                (for hands-on courses)
              </span>
            </p>
          </div>

          <div className="flex items-start gap-3">
            <FaGlobe className="text-[#0B2C5F] text-xl mt-1" />
            <p>Online (self-paced and instructor-led)</p>
          </div>

          <div className="flex items-start gap-3">
            <FaUsers className="text-[#0B2C5F] text-xl mt-1" />
            <p>
              Hybrid learning models <br />
              <span className="text-gray-500 text-sm">
                (customised per region)
              </span>
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>
  </>  
  );
}

export default Services;