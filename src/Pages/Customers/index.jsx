import React, { useRef } from "react"
import HeaderSliderComponent from "../../components/Sliders/HeaderSliderComponent"
import MainLayout from "../../Layouts/MainLayout"
import mainSliderImage1 from "../../assets/sliderImages/mainSliderImage1.png"
import mainSliderImage2 from "../../assets/sliderImages/mainSliderImage2.png"
import CustomerComponent from "../../Homepage/Components/CustomerComponent"
import PerformanceProofComponent from "../../Homepage/Components/PerformanceProofComponent"
import FeedbackComponent from "../../Homepage/Components/FeedbackComponent"

const HeaderSliderData = {
  heading: "Dot Propack Valuable Customers",
  text: "Dot Propack always commitment to provide one stop solution for hygiene product manufacturer. Dot Propack aims to deliver seamless solutions and exceptional value to our customers. With the help of World class Machinary & Experienced staff Dot propack aims to provide Exceptional quality products at Unsurpassed value.",
  buttons: [
    {
      text: "Trust",
    },
    {
      text: "Testimonials",
    },
  ],

  SliderData: [
    {
      id: 1,
      src: mainSliderImage1,
      title: "PAN Health",
      description:
        "Nurturing happier, healthier lives. We believe, every woman, child and elder deserves the best care, utmost protection and maximum comfort.",
    },
    {
      id: 2,
      src: mainSliderImage2,
      title: "PAN Health",
      description:
        "Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc",
    },
    {
      id: 3,
      src: mainSliderImage2,
      title: "PAN Health",
      description:
        "Nurturing happier, healthier lives. We believe, every woman, child and elder deserves the best care, utmost protection and maximum comfort.",
    },
  ],
}
const Customers = () => {

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

  return (
    <>
      <MainLayout>
        <HeaderSliderComponent {...HeaderSliderData} scrollToYear={scrollToContent} />
        <CustomerComponent />
        <PerformanceProofComponent refData={refs} />
        <FeedbackComponent containerClass="mb-[100px]" refData={refs} />
      </MainLayout>
    </>
  )
}

export default Customers
