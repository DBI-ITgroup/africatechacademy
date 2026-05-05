import tech1 from "../assets/images/techh1.jpg";
import tech2 from "../assets/images/tech2.jpg";
import tech3 from "../assets/images/tech3.jpg";

import { useState, useEffect } from "react";

const slides = [
  {
    title: "Empowering Africa Through Digital Skills",
    text: "Industry-aligned training designed to prepare you for the future.",
    image: tech1,
  },
  {
    title: "Build Your Career in Tech",
    text: "Learn networking, cybersecurity, cloud, and more.",
    image: tech2,
  },
  {
    title: "Future-Ready ICT Training",
    text: "Gain practical skills with globally recognised certifications.",
    image: tech3,
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">

     {slides.map((slide, index) => (
      <div
        key={index}
        className={`absolute inset-0 w-full h-full flex items-center justify-center text-center px-6 transition-opacity duration-700 ${
          index === current ? "opacity-100" : "opacity-0"
        } bg-cover bg-center`}
        style={{ backgroundImage: `url(${slide.image})` }}
      >
    
        <div className="absolute inset-0 bg-black/50"></div>

       
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {slide.title}
          </h1>

          <p className="text-lg mb-6 text-white">
            {slide.text}
          </p>

          <button className="bg-[#0d542b] hover:bg-[#4F7942] text-white px-6 py-3 rounded-lg font-semibold">
            <a href="#contact">Get Started</a>
          </button>
        </div>
      </div>
    ))}

     
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full"
      >
        ›
      </button>

    
      <div className="absolute bottom-6 w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

    </section>
  );
}

export default Hero;