import { useState } from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import emailjs from "emailjs-com";



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_ryy7rqf",
      "template_etgi0cd",
      formData,
      "kC-_Gkc24Xfgwc9LT"
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    })
    .catch((error) => {
      console.error("EmailJS error:", error);
      alert("Failed to send message: " + error.text);
    });
  };

  return (
    <>
     
      <section id="contact" className="scroll-mt-28 bg-white-100 py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-3xl font-bold">CONTACT US</h2>
                  <div className="w-12 h-1 bg-[#FFA500] mx-auto mt-1 rounded-full"></div>
                </div>


                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    
                    <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-15 mt-10 ">
                            Partner With Us to Build Digital Skills
                            </h2>

                            <p className="text-gray-600 text-m mb-15 text-lg">
                            Looking to upskill your team or explore digital training opportunities?
                            We work with individuals, organisations, and institutions to deliver
                            practical, industry aligned ICT training.
                            </p>

                            <p className="text-gray-600 text-lg">
                            Complete the enquiry form and our team will get in touch to help you get started.
                            </p>
                    </div>

                    
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white p-8 rounded-2xl shadow-md"
                    >
                        
                        <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                        />
                        </div>

                        
                        <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                        />
                        </div>

                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                              Phone (Optional)
                          </label>
                          <input
                            type="number"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                           
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                          >

                          </input>
                        </div>
                       
                        <div className="mb-6">
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                              Message
                          </label>
                          <textarea
                              name="message"
                              rows="4"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                          ></textarea>
                        </div>

                        
                        <button
                        type="submit"
                        className="w-full bg-[#0d542b] text-white py-2 rounded-lg hover:bg-[#4F7942] transition"
                        >
                        Send Message
                        </button>
                    </form>

                </div>
         </div>   
      </section>

    
      <section className="relative overflow-hidden py-16 px-6">

        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-blue-50"></div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
        </div>


        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Visit or Contact Us
            </h3>

            <p className="text-gray-600 mb-6 text-lg">
              You can reach us through the details below or visit our office.
            </p>

            <div className="space-y-4 text-gray-700 text-lg">

              <div className="flex items-start gap-3">
                <MdLocationOn className="text-xl mt-1 text-[#0B2C5F]" />
                <span>
                  No. 176 Govan Mbeki Avenue <br />
                  Gqeberha, Central 6001
                </span>
              </div>

              <div className="flex items-center gap-3">
                <MdEmail className="text-xl text-[#0B2C5F]" />
                <span>info@africatechacademy.co.za</span>
              </div>

              <div className="flex items-center gap-3">
                <MdPhone className="text-xl text-[#0B2C5F]" />
                <span>+27 (0) 41 020 0024</span>
              </div>

            
              <div className="flex items-center gap-4 pt-2">
                <a className="text-gray-500 hover:text-[#FFA500] transition">
                  <FaFacebook />
                </a>
                <a className="text-gray-500 hover:text-[#FFA500] transition">
                  <FaLinkedin />
                </a>
                <a className="text-gray-500 hover:text-[#FFA500] transition">
                  <FaInstagram />
                </a>
                <a className="text-gray-500 hover:text-[#FFA500] transition">
                  <FaXTwitter />
                </a>
              </div>

            </div>
          </div>

        
          <div className="w-full h-[350px] rounded-2xl overflow-hidden shadow-lg border border-white/40 backdrop-blur-sm">
            <iframe
              title="location-map"
              src="https://www.google.com/maps?q=176+Govan+Mbeki+Avenue+Gqeberha&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>
      
    </>
  );
}