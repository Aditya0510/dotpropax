import { useState } from "react";
import ArrowIcon from "../../assets/Icons/ArrowIcon";

const MainImageSlider = ({ sliderArray = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sliderArray.length;

  if (!sliderArray.length) return <p>No images found</p>;

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Slider Container */}
      <div className="relative w-[100%] h-[621px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 70}%)` }}
        >
          {sliderArray.map((prof, index) => (
            <div key={index} className="w-[70%] h-full flex-shrink-0 mr-[5%] relative">
              <img src={prof?.image} alt={prof?.text} className="w-full h-full object-cover" />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
              {/* Text Content */}
              <div className="absolute bottom-0 w-full py-6 px-6 text-white font-semibold text-lg">
                {prof.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button onClick={prevSlide} className="p-2 border-2 rounded border-[#2B5592] text-[#2B5592] hover:bg-[#2B5592] hover:text-white transition">
          <ArrowIcon className="rotate-180" />
        </button>
        <button onClick={nextSlide} className="p-2 border-2 rounded border-[#2B5592] text-[#2B5592] hover:bg-[#2B5592] hover:text-white transition">
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

export default MainImageSlider;
