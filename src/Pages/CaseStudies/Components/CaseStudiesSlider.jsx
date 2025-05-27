import timeline1 from "../../../assets/Banners/timeLine1.png";
import timeline2 from "../../../assets/Banners/timeLine2.png";
import HeaderSliderComponent from "../../../components/Sliders/HeaderSliderComponent";
import mainSliderImage1 from "../../../assets/sliderImages/mainSliderImage1.png";
import { useRef } from "react";

const CaseStudiesSlider = ({ scrollToYear }) => {

  const HeaderSliderData = {
    heading: "Case Studies & Innovation",
    text: "Deals in Plastic Packaging and Speciality films. DOT Propack is one of the leading manufacturers of Cast Polyethylene and Polypropylene Films, with facility of Central Impression Flexographic Printing machine upto Six Colors and Extrusion Lamination facility. ",
    buttons: [{
      text: "2016"
    }, {
      text: "2017"
    },
    {
      text: "2018"
    }, {
      text: "2019"
    }, {
      text: "2020"
    }, {
      text: "2021"
    }, {
      text: "2022"
    }, {
      text: "2023"
    }, {
      text: "2024"
    }
    ],

    SliderData: [
      { id: 1, src: timeline1, description: "We intend to provide world class solution in Cast PE films, CPP Films, Lamination Films and Printed Film" },
      { id: 2, src: timeline2, description: "We intend to provide world class solution in Cast PE films, CPP Films, Lamination Films and Printed Film" },
      { id: 3, src: mainSliderImage1, description: "We intend to provide world class solution in Cast PE films, CPP Films, Lamination Films and Printed Film" },
    ]
  }

  return (
    <HeaderSliderComponent
      {...HeaderSliderData}
      descriptionStyle="font-[700] text-[24px] leading-[32px]"
      scrollToYear={scrollToYear}
    />
  )
}
export default CaseStudiesSlider;