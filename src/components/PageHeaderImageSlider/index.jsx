import React, { useEffect, useState } from "react";
import { FacilitySlider } from "../../Utilities/dummyFacilityHeaderSlider";

const PageHeaderImageSlider = ({ imageList = FacilitySlider }) => {
  const images = imageList;
  const [positions, setPositions] = useState([0, 1, 2]);

  const rotateImages = () => {
    setPositions((prev) => [
      (prev[0] + 1) % imageList.length,
      (prev[1] + 1) % imageList.length,
      (prev[2] + 1) % imageList.length,
    ]);
  };

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      rotateImages();
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between align-middle gap-[50px] items-center">
        <div className="w-[30%] max-sm:hidden transition-transform duration-700 ease-in-out">
          <img
            src={images[positions[0]].src}
            alt={images[positions[0]].description}
            className="w-[100%] aspect-video object-cover opacity-80 transition-opacity duration-700"
          />
        </div>
        <div className="w-[100%] md:w-[33%] relative transition-transform duration-700 ease-in-out">
          <img
            src={images[positions[1]].src}
            alt={images[positions[1]].description}
            className="w-[100%] object-cover aspect-video transform scale-105 transition-transform duration-700"
          />
          <p className="absolute bottom-0 left-0 p-[10px] md:p-[20px] xl:p-[30px] text-white bg-black bg-opacity-50 transition-opacity duration-700">
            {images[positions[1]]?.description}
          </p>
        </div>
        <div className="w-[30%] max-sm:hidden transition-transform duration-700 ease-in-out">
          <img
            src={images[positions[2]].src}
            alt={images[positions[2]].description}
            className="w-[100%] aspect-video object-cover opacity-80 transition-opacity duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default PageHeaderImageSlider;