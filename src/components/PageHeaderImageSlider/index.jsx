import React, { useEffect, useState } from "react";
import { FacilitySlider } from "../../Utilities/dummyFacilityHeaderSlider";

const PageHeaderImageSlider = ({ imageList = FacilitySlider, descriptionStyle = '' }) => {
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
    <div className="w-full ">
      <div className="flex justify-between align-middle gap-[50px] items-center px-[14px] md:px-0">
        <div className="w-[30%] max-sm:hidden transition-transform duration-700 ease-in-out ">
          <img
            src={images[positions[0]].src}
            alt={images[positions[0]].description}
            className="w-[100%] aspect-video opacity-95 transition-opacity duration-700 min-h-[436px] rounded-[12px]"
          />
        </div>
        <div className="w-[100%] md:w-[33%] relative transition-transform duration-700 ease-in-out bg-white">
          <img
            src={images[positions[1]].src}
            alt={images[positions[1]].description}
            className="w-[100%]  aspect-video transform transition-transform duration-700 min-h-[436px] rounded-[12px]"
          />
          <div className="absolute bottom-0 left-0 z-20 p-[10px] md:p-[20px] xl:p-[30px">
            <h3 className="text-white transition-opacity duration-700">
              {images[positions[1]]?.title}
            </h3>
            <p className={`mt-[20px] font-[400] text-[18px] leading-[24px] text-white transition-opacity duration-700 ${descriptionStyle}`} >
              {images[positions[1]]?.description}
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000] opacity-45"></div>
        </div>
        <div className="w-[30%] max-sm:hidden transition-transform duration-700 ease-in-out">
          <img
            src={images[positions[2]].src}
            alt={images[positions[2]].description}
            className="w-[100%] aspect-video  opacity-95 transition-opacity duration-700 min-h-[436px] rounded-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

export default PageHeaderImageSlider;