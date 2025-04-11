import InfrastructureSection from "../../../AboutUs/InfrastructureSection";
import mainSliderImage2 from "../../../assets/sliderImages/mainSliderImage2.png";
import mainSliderImage1 from "../../../assets/sliderImages/mainSliderImage1.png";

import facilityImage1 from "../../../assets/sliderImages/facilityImage1.png";

import facilityImage2 from "../../../assets/sliderImages/facilityImage2.png";
import MainWidthContainer from "../../../Layouts/MainWidthContainer";
const InfrastructureDetail = () => {
  const infrastructure = [
    {
      title: "Total Space",
      description:
        "17,000 total space 10,000 Sqft fully enclosed production area",
    },
    {
      title: "Dosing system",
      description:
        "European Gravimetric dosing system and Online extrusion lamination facility",
    },
    {
      title: "Environment",
      description: "Positive air pressure controlled environment for dust free area",
    },
    {
      title: "Machines",
      description: "Multilayer Cast Extrusion Machine and High Speed Slitting Machines",
    },
    {
      title: "T Die",
      description: "Auto T die with European thickness measuring and controlling system",
    },
    {
      title: "FlexoPrinting",
      description: "Taiwanese 6 Color CI flexoPrinting Machine and Separate raw material storage area",
    },
  ]
  return (<MainWidthContainer className="mt-[140px]">
    <InfrastructureSection infrastructureArray={infrastructure} />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[48px]">
      <div className="flex flex-col  gap-[24px]">
        <img src={facilityImage1} alt="infra image 1" className="h-[267px] w-full " />
        <img src={facilityImage2} alt="infra image 1" className="h-[267px] w-full " />
      </div>
      <div>
        <img src={mainSliderImage2} className="w-full h-[558px]" alt="infra image" />
      </div>
      <div className="flex flex-col  gap-[24px]">
        <img src={mainSliderImage1} alt="infra image 1" className="h-[267px] w-full " />
        <img src={facilityImage1} alt="infra image 1" className="h-[267px] w-full " />
      </div>
    </div>
  </MainWidthContainer>)
}
export default InfrastructureDetail;