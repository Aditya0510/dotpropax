import HeaderSliderComponent from "../../../components/Sliders/HeaderSliderComponent";
import mainSliderImage1 from "../../../assets/sliderImages/aboutUsSlider1.png";
import mainSliderImage2 from "../../../assets/Banners/proofImage.png";
import mainSliderImage3 from "../../../assets/Banners/proofImage2.png";
import React from "react";

const AboutUsSlider = ({ scrollToContent, refData }) => {
  const HeaderSliderData = {
    heading: "Dot Propack Family",
    text: "Deals in Plastic Packaging and Speciality films. DOT Propack is one of the leading manufacturers of Cast Polyethylene and Polypropylene Films, with facility of Central Impression Flexographic Printing machine upto Six Colors and Extrusion Lamination facility.",
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
      { id: 1, src: mainSliderImage1, description: "We intend to provide world class solution in Cast PE films, CPP Films, Lamination Films and Printed Film" },
      { id: 2, src: mainSliderImage2, description: "We intend to provide world class solution in Cast PE films, CPP Films, Lamination Films and Printed Film" },
      { id: 3, src: mainSliderImage3, description: "We intend to provide world class solution in Cast PE films, CPP Films, Lamination Films and Printed Film" },
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