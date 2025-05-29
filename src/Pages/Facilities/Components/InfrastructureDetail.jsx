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
        "45,000 Sq. Ft. Total Space. over 20,000 Sq. Ft. Fully enclosed production area",
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
      description: "Multilayer Breathable and Non-Breathable High speed Cast Film Extrusion Lines with world Class Supporting Units such as Defect Detection, GSM Scanner, etc, Along with this, we have Best in Hygiene Film auto alignment and Auto tension controller High speed Slitting Machines.",
    },
    {
      title: "T Die",
      description: "Auto T die with European thickness measuring and controlling system",
    },
    {
      title: "FlexoPrinting",
      description: "Top Class upto six colors 2 Cl flexo Printing Machines which provides best printing quality of Hygiene FIlm.",
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