import ArrowIcon from "../../assets/Icons/ArrowIcon";
import CloudAiIcon from "../../assets/Icons/CloudAiIcon";
import Button from "../../components/Button";
import MainImageSlider from "../../components/Sliders/MainImageSlider";
import mainSliderImage1 from "../../assets/sliderImages/mainSliderImage1.png";
import mainSliderImage2 from "../../assets/sliderImages/mainSliderImage2.png";
import { useEffect, useState } from "react";

const QualityComponent = () => {
  const [currentTab, setCurrentTab] = useState(1);
  const firstSlide = [{
    image: mainSliderImage1, text: "45,000 Sq. Ft. total space. Over 20,000 Sq. Ft. Fully enclosed production area"
  }, {
    image: mainSliderImage2, text: "Positive air pressure controlled environment for dust free area"
  }];
  const secondSlide = [{
    image: mainSliderImage2, text: "Positive air pressure controlled environment for dust free area"
  }, {
    image: mainSliderImage1, text: "45,000 Sq. Ft. total space. Over 20,000 Sq. Ft. Fully enclosed production area"
  },];
  const [sliderArray, setSliderArray] = useState(firstSlide);

  useEffect(() => {
    if (currentTab == 1) {
      setSliderArray([...firstSlide]);
    } else {
      setSliderArray([...secondSlide]);
    }
  }, [currentTab])

  return (<div className="ms-[7.4%] 3xl:ms-[17%] mt-[160px] grid grid-cols-2 gap-[70px]">
    <div className="col-span-2 lg:col-span-1 me-[24px]">
      <h2 className="font-[700] text-[48px]  tracking-[0%]">
        Ensuring Superior Quality for Every Product, Every Time
      </h2>
      <p className="font-[400] text-[#565E69] text-[16px] leading-[28px] my-[12px]">Our commitment to excellence drives every step of our diaper production process. We utilize advanced manufacturing technologies and stringent quality control measures to ensure each diaper meets the highest standards of comfort, absorption, and skin protection. From selecting premium materials to conducting rigorous product testing, we prioritize your baby's safety and well-being. Trust us to deliver diapers that provide reliable performance and gentle care for delicate skin.</p>
      <Button className="mt-[24px]">
        Read More <ArrowIcon />
      </Button>

      <div className="mt-[83px] flex flex-col gap-[32px]">
        <div
          onClick={() => setCurrentTab(1)}
          className={`cursor-pointer flex flex-col md:flex-row gap-[24px] w-[90%] p-[24px] ${currentTab == 1 && 'bg-[#F3F8FF]  rounded-[4px]'}`}
        >
          <div>
            <div className="h-[60px] w-[60px] bg-[#F9F9FB] rounded-full flex items-center justify-center" >
              <CloudAiIcon />
            </div>
          </div>
          <div>
            <h5 className="font-[700] text-[16px] leading-[28px]">Infrastructure/ Facilities @ DOT Propack</h5>
            <p className="font-[400] text-[16px] leading-[28px] text-[#414750]">We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc</p>
          </div>
        </div>
        <div
          onClick={() => setCurrentTab(2)}
          className={`cursor-pointer flex flex-col md:flex-row gap-[24px] w-[90%] p-[24px] ${currentTab == 2 && 'bg-[#F3F8FF]  rounded-[4px] '}`}>
          <div>
            <div className="h-[60px] w-[60px] bg-[#F9F9FB] rounded-full flex items-center justify-center" >
              <CloudAiIcon />
            </div>
          </div>
          <div>
            <h5 className="font-[700] text-[16px] leading-[28px]">Testing Equipments / Labs</h5>
            <p className="font-[400] text-[16px] leading-[28px] text-[#414750]">Dot Propack invested in the latest testing equipments providing the highest level of accuracy and customization while keeping the process sustainable. Our company is equipped with a Full-Fledged lab installed with state of art testing equipments like Universal Testing Machine, WVTR Tester, COF Tester, Spectrophotometer Gloss
Meter, Opacity Tester, etc.</p>
          </div>
        </div>
      </div>

    </div>
    <div className="col-span-2 lg:col-span-1">
      <MainImageSlider sliderArray={sliderArray} />
    </div>
  </div>)
}
export default QualityComponent;