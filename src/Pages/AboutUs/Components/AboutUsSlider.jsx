import HeaderSliderComponent from "../../../components/Sliders/HeaderSliderComponent";
import mainSliderImage1 from "../../../assets/sliderImages/aboutUsSlider1.png";
import mainSliderImage2 from "../../../assets/Banners/proofImage.png";
import mainSliderImage3 from "../../../assets/Banners/proofImage2.png";
import React from "react";

const AboutUsSlider = ({ scrollToContent, refData }) => {
  const HeaderSliderData = {
    heading: "Dot Propack Family",
    text: "DOT Propack is one of the leading manufacturers of PE Cast  Film & Adhesive Closuser side Tape with facility of upto Six Colors CI Flexographic Printing machine and Extrusion Lamination facility. Dot Propack is leading manufacturer from last 8+ years and having 125+ Skilled and Experienced Employees.",
    buttons: [{
      text: "Why Choose Us"
    }, {
      text: "Mission And Vision"
    },
    {
      text: "Management Team"
    }, {
      text: "Sales Performance"
    }
    ],

    SliderData: [
      { id: 1, src: mainSliderImage1, description: "We intend to provide world class solution in PE Cast films, CPP Films, Lamination Films and Printed Film" },
      { id: 2, src: mainSliderImage2, description: "We intend to provide world class solution in PE Cast films, CPP Films, Lamination Films and Printed Film" },
      { id: 3, src: mainSliderImage3, description: "We intend to provide world class solution in PE Cast films, CPP Films, Lamination Films and Printed Film" },
    ]
  }

  HeaderSliderData?.buttons?.forEach(btn => {
    if (!refData.current[btn?.text]) {
      refData.current[btn?.text] = React?.createRef();
    }
  });

  return (
    <HeaderSliderComponent {...HeaderSliderData} descriptionStyle="font-[700] text-[24px] leading-[32px]" scrollToYear={scrollToContent} />
  )
}
export default AboutUsSlider;