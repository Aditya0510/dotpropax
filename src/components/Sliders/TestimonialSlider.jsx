import { useState, useEffect } from "react";
import testimonial1 from "../../assets/testimonialImages/testimonial1.png";
import QuoteIcon from "../../assets/Icons/QuoteIcon";
const testimonials = [
  {
    image: testimonial1,
    name: "Mr. Ramesh Mehta",
    role: "Customer",
    quote: "Unmatched Quality and consistency!",
    description: "Unmatched Quality and Consistency! One of the biggest challenges in the hygiene industry is supply reliability. Dotpropack has never let us down. Their prompt deliveries and well-managed logistics make them a valuable partner."
  },
  {
    image: testimonial1,
    name: "Ms. lucy Sharma",
    role: "Business Owner",
    quote: "Great Service!",
    description: "Dotpropack provides excellent hygiene solutions and is very reliable."
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Auto-slide effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full">
      <div className="flex-col flex md:flex-row gap-[24px]">
        {/* Left Image */}
        <div className="flex flex-col justify-center items-center md:w-[60%] gap-[12px]">
          <img src={testimonials[currentIndex].image} className="h-[364px] w-full md:w-[364px] object-cover rounded-[4px]" />

          {/* Dots Indicator */}
          <div className="flex gap-[4px] justify-end items-center">
            {testimonials.map((_, dotIndex) => (
              <span
                key={dotIndex}
                className={`w-[12px] h-[12px] rounded-full ${currentIndex === dotIndex ? "w-[12px] h-[12px] bg-[#2B5592]" : "w-[8px] h-[8px] bg-gray-400"}`}
              />
            ))}
          </div>
        </div>

        {/* Right Text */}
        <div className="flex flex-col gap-[24px] md:w-[40%]">
          <QuoteIcon />
          <p className="font-[700] text-[14px] leading-[20px]">{testimonials[currentIndex].quote}</p>
          <p className="font-[400] text-[16px] leading-[28px] text-[#414750]">{testimonials[currentIndex].description}</p>
          {/* Profile Section */}
          <div className="flex gap-[14px] items-center">
            <img src={testimonials[currentIndex].image} className="rounded-full h-[80px] w-[80px]" />
            <div>
              <p className="text-[#F6821F] font-[400] text-[12px] leading-[18px]">{testimonials[currentIndex].role}</p>
              <p className="font-[600]">{testimonials[currentIndex].name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
