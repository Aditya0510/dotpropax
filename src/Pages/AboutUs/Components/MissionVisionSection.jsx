import { useState } from "react";
import ArrowIcon from "../../../assets/Icons/ArrowIcon";
import MainWidthContainer from "../../../Layouts/MainWidthContainer";
import valueDoc from "../../../assets/Banners/valueDoc.png";
const sliderArray = [
  { text: "Values", image: valueDoc },
  { text: "Vision", image: valueDoc },
  { text: "Mission", image: valueDoc },
  { text: "TMP Policy", image: valueDoc },
  { text: "Quality", image: valueDoc },
]

const MissionVisionComponent = ({ refData }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sliderArray.length;


  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (<div className="hidden md:block mt-[100px] mb-[50px]">
    <div className="flex flex-col gap-[40px]">
      <MainWidthContainer>
        <div
          ref={refData?.current["Mission And Vision"] ?? null}
          className="grid grid-cols-5">
          <div className="col-span-4 flex flex-col gap-[20px]">
            <h2 className="font-[700]">Mission,Vision, Quality & Policy</h2>
            <p>Dot Propack is dedicated to continuous improvement in Quality standards, in accordance with the following principles indefining our objectives and goals:</p>
          </div>
          <div className="flex items-end justify-end mb-[30px]">
            <div className="flex gap-4 ">
              <button onClick={prevSlide} className="p-2 border-2 rounded border-[#2B5592] text-[#2B5592] hover:bg-[#2B5592] hover:text-white transition">
                <ArrowIcon className="rotate-180" />
              </button>
              <button onClick={nextSlide} className="p-2 border-2 rounded border-[#2B5592] text-[#2B5592] hover:bg-[#2B5592] hover:text-white transition">
                <ArrowIcon />
              </button>
            </div>
          </div>
        </div>
      </MainWidthContainer>
      <div className="md:ms-[5%] lg:ms-[7%] 3xl:ms-[17%]">
        <div className="relative w-[100%]  overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out "
            style={{ transform: `translateX(-${currentIndex * 10}%)` }}
          >
            {sliderArray.map((prof, index) => (
              <div key={index} className="bg-[#F3F8FF] rounded-[4px] p-[36px] h-[399px] mr-[2%] relative flex flex-col gap-[12px]">
                <p className="font-[700] text-[24px] leading-[32px] text-center">   {prof.text}</p>
                <img src={prof?.image} alt={prof?.text} className=" object-fit h-[283px] min-w-[180px]" />

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  </div>)
}
export default MissionVisionComponent;