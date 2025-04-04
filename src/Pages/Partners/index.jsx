import React from "react"
import HeaderSliderComponent from "../../components/Sliders/HeaderSliderComponent"
import MainLayout from "../../Layouts/MainLayout"
import mainSliderImage1 from "../../assets/sliderImages/mainSliderImage1.png"
import mainSliderImage2 from "../../assets/sliderImages/mainSliderImage2.png"
import CustomerComponent from "../../Homepage/Components/CustomerComponent"
import PerformanceProofComponent from "../../Homepage/Components/PerformanceProofComponent"
import FeedbackComponent from "../../Homepage/Components/FeedbackComponent"

const HeaderSliderData = {
  heading: "Partners",
  text: "We collaborate with industry-leading partners who share our commitment to innovation, reliability, and excellence. Their expertise and support enable us to deliver seamless solutions and exceptional value to our customers. Together, we drive growth, efficiency, and success across every project we undertake.",
  buttons: [],

  SliderData: [
    {
      id: 1,
      src: mainSliderImage1,
      title:"Reliance Industries Limited",
      description:
        "Nurturing happier, healthier lives. We believe, every woman, child and elder deserves the best care, utmost protection and maximum comfort.",
    },
    {
      id: 2,
      src: mainSliderImage2,
      title:"Reliance Industries Limited",
      description:
        "Ancillaries: We have all other ancillaries required for Machine like, Chilling plant, AHU for Positive air pressure, Compressor etc",
    },
    {
      id: 3,
      src: mainSliderImage2,
      title:"Reliance Industries Limited",
      description:
        "Nurturing happier, healthier lives. We believe, every woman, child and elder deserves the best care, utmost protection and maximum comfort.",
    },
  ],
}
const Partners = () => {
  return (
    <>
      <MainLayout>
        <HeaderSliderComponent {...HeaderSliderData} />
        <CustomerComponent />
      </MainLayout>
    </>
  )
}

export default Partners
