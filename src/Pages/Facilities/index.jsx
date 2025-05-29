import HeaderSliderComponent from "../../components/Sliders/HeaderSliderComponent";
import MainLayout from "../../Layouts/MainLayout";
import mainSliderImage1 from "../../assets/sliderImages/mainSliderImage1.png";
import mainSliderImage2 from "../../assets/sliderImages/mainSliderImage2.png";
import InfrastructureComponent from "./Components/InfrastructureComponent";
import MainWidthContainer from "../../Layouts/MainWidthContainer";
import TestingEquipmentsSection from "../../AboutUs/TestingEquipmentsSection";
import InfrastructureDetail from "./Components/InfrastructureDetail";
import React, { useRef } from "react";

const Facilities = () => {
  const HeaderSliderData = {
    heading: "Dot Propack Facilities",
    text: "Dot Propack have a modern Hygiene Film Manufacturing Facility setup with dedicated 20000 Sq. Mtr area in Air Conditioned & Positive air Pressure to maintain Hygiene of the product.",
    buttons: [{
      text: "Better Infrastructure"
    }, {
      text: "Testing Equipment"
    }],

    SliderData: [
      { id: 1, src: mainSliderImage1, description: "Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc" },
      { id: 2, src: mainSliderImage2, description: "Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc" },
      { id: 3, src: mainSliderImage2, description: "Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc" },
    ]

  }

  const refs = useRef({});

  const scrollToContent = (data) => {
    const node = refs.current[data]?.current;
    if (node) {
      node.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  HeaderSliderData?.buttons?.forEach(btn => {
    if (!refs.current[btn.text]) {
      refs.current[btn.text] = React.createRef();
    }
  });

  return (<MainLayout>
    <HeaderSliderComponent {...HeaderSliderData} descriptionStyle="font-[700] text-[24px] leading-[32px]" scrollToYear={scrollToContent} />
    <InfrastructureComponent refData={refs} />
    <InfrastructureDetail />
    <MainWidthContainer className="my-[140px] ">
      <TestingEquipmentsSection refData={refs} />
    </MainWidthContainer>
  </MainLayout>)
}
export default Facilities;